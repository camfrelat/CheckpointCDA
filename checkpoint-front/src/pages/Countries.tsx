import { Card } from "antd";
import { Link, useParams } from "react-router-dom";
import { ICountry } from "../graphql/types/ICountry";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { COUNTRIES_LIST } from "../graphql/queries/countryQuery";

function Countries() {
  let { code } = useParams();
  const [countries, setCountries] = useState<ICountry[]>([]);
  console.log(code);

  const { loading, error } = useQuery(COUNTRIES_LIST, {
    variables: {
      filter: { continent: { eq: code } },
    },
    onCompleted(data) {
      console.log(data);
      setCountries(data.countries);
    },
  });

  return (
    <>
      <Card title="Countries">
        {countries.map((country: ICountry) => (
          <Card.Grid key={country.code}>
            <span>{country.emoji}</span>
            <Link to={`/country/${country}`}>{country.name}</Link>
          </Card.Grid>
        ))}
      </Card>
    </>
  );
}

export default Countries;
