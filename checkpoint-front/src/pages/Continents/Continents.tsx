import { useQuery } from "@apollo/client";
import "./continents.css";
import { Card, Row } from "antd";
import { CONTINENTS_LIST } from "../../graphql/queries/continentQuery";
import { useState } from "react";
import { IContinent } from "../../graphql/types/IContinent";
import { Link, Router } from "react-router-dom";
import { ICountry } from "../../graphql/types/ICountry";

function Continents() {
  const [continents, setContinents] = useState<IContinent[]>([]);

  const { loading, error } = useQuery(CONTINENTS_LIST, {
    variables: {
      filter: { code: { in: ["AF", "EU", "AS", "OC", "AN", "SA", "NA"] } },
    },
    onCompleted(data) {
      setContinents(data.continents);
    },
  });

  return (
    <>
      <Row justify="space-evenly">
        <Card title="Continents">
          {continents.map((continent: IContinent) => (
            <Card.Grid key={continent.code} className="gridStyle">
              <Link to={`/continent/${continent.code}`} className="textStyle">
                {continent.name}
              </Link>
            </Card.Grid>
          ))}
        </Card>
      </Row>
    </>
  );
}

export default Continents;

// const handleClick = (code: string) => {
//   var data = continents.filter((continent) => continent.code === code);
//   console.log(data);
//   const updatedCountries = data.reduce((acc, el) => {
//     var result: ICountry[] = [...el.countries];
//     console.log(result);
//     return result;
//   }, {});

//   console.log("toto", updatedCountries);
//   var finalData: ICountry[] = [];
//   //finalData.push(...updatedCountries);
//   console.log(test, "TEST");
//   // setCountriesByContinent(updatedCountries);
//   //console.log(countriesByContinent);
// };
