import "./continents.css";
import { Card, Col, Divider, Row } from "antd";

function Continents() {
  const tempData: string[] = ["France", "Allemagne"];
  return (
    <>
      <Card title="Continents">
        {tempData.map((element: string) => (
          <Card.Grid className="gridStyle">{element}</Card.Grid>
        ))}
      </Card>
    </>
  );
}

export default Continents;
