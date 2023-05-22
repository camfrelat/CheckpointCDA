import { useQuery } from "@apollo/client";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { COUNTRY } from "../graphql/queries/countryQuery";

function CountryDetails() {
  // const { loading, error } = useQuery(COUNTRY, {
  //   variables: { code: "15" },
  //   onCompleted(data) {
  //     console.log(data);
  //   },
  // });

  return (
    <>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="country flag"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta
          title="Country"
          description={
            <ul>
              <li>info 1</li>
              <li>info 2</li>
            </ul>
          }
        />
      </Card>
    </>
  );
}

export default CountryDetails;
