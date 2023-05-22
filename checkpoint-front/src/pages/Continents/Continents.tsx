import { useQuery } from "@apollo/client";
import "./continents.css";
import { Card, Col, Divider, Row } from "antd";
import { CONTINENTS_LIST } from "../../graphql/queries/continentQuery";
import { useState } from "react";
import { IContinent } from "../../graphql/types/IContinent";
import { Link } from "react-router-dom";

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
  //const tempData: string[] = ["Europe", "Asia"];

  return (
    <>
      <Card title="Continents">
        {continents.map((continent: IContinent) => (
          <Card.Grid key={continent.code} className="gridStyle">
            <Link to={`/countries/${continent.code}`} className="textStyle">
              {continent.name}
            </Link>
          </Card.Grid>
        ))}
      </Card>
    </>
  );
}

export default Continents;
