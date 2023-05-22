import { Card } from "antd";
import { Link, useParams } from "react-router-dom";
import { ICountry } from "../../graphql/types/ICountry";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { COUNTRIES_LIST } from "../../graphql/queries/countryQuery";
import "./countries.css";

function Countries() {
  let { code } = useParams();
  const [countries, setCountries] = useState<ICountry[]>([]);

  const { loading, error } = useQuery(COUNTRIES_LIST, {
    variables: {
      filter: { continent: { eq: code } },
    },
    onCompleted(data) {
      setCountries(data.countries);
    },
  });

  return (
    <>
      <Card title="Countries">
        {countries.map((country: ICountry) => (
          <Card.Grid key={country.code} className="cardStyle">
            <Link
              to={`/country/${country.code}`}
              className="textStyle cardStyle"
            >
              <span className="emojiStyle">{country.emoji}</span>
              {country.name}
            </Link>
          </Card.Grid>
        ))}
      </Card>
    </>
  );
}

export default Countries;
