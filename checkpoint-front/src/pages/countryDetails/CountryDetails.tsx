import { useQuery } from "@apollo/client";
import { Card, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { COUNTRY } from "../../graphql/queries/countryQuery";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { ICountryDetails } from "../../graphql/types/ICountry";
import "./countryDetails.css";

function CountryDetails() {
  let { code } = useParams();
  const [country, setCountry] = useState<ICountryDetails>({
    name: "Pays",
    code: "",
    emoji: "Image",
    capital: "",
    currency: "",
  });

  const { loading, error } = useQuery(COUNTRY, {
    variables: { code: code },

    onCompleted(data) {
      setCountry(data.country);
    },
  });

  return (
    <>
      <Row justify="center">
        <Card
          hoverable
          style={{ width: 400 }}
          cover={<span className="emojiStyle">{country.emoji}</span>}
        >
          <Meta
            className="cardStyle"
            title={<span className="titleStyle">{country.name}</span>}
            description={
              <ul>
                <li>
                  Capital : {country.capital ? country.capital : "No data"}
                </li>
                <li>
                  Currency : {country.currency ? country.currency : "No data"}
                </li>
              </ul>
            }
          />
        </Card>
      </Row>
    </>
  );
}

export default CountryDetails;
