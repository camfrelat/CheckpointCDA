import { Card } from "antd";

function Countries() {
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

export default Countries;
