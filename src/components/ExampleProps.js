import React from "react";
import { Row, Container } from "reactstrap";
import ExamplePropsData from "./ExamplePropsData";
import Data from "./Data";

const ExampleProps = () => {
  return (
    <>
      <Container className="mt-5">
        {/* <Row xs="12" lg="3">
          <ExamplePropsData
            imgsrc="https://occ-0-2164-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdncnmk-gRk1M89pVISTDl0MpIsgKBk2swizl7pASTBUZeroQmElfVH8lrTQqLLd40FMdy2BnUv-34b5u_zybHpwASc7uYM6hrCBrGx5o5TglIp54_ln_8-x0JOq.jpg?r=93f"
            title="The Queen's Gambit"
            subtitle="Anya Taylor-Joy,Bill Camp,Marielle Heller"
            subtext="In a 1950s orphanage, a young girl reveals an astonishing talent for
            chess and begins an unlikely journey to stardom while grappling with
            addiction."
            link="https://www.netflix.com/in/title/80234304"
          />
        </Row> */}

        <h2 className="card-title">Map Method(Props)</h2>
        <Row xs="12" lg="3" className="mt-3">
          {Data.map((val, index) => {
            return (
              <ExamplePropsData
                imgsrc={val.imgsrc}
                title={val.title}
                subtitle={val.subtitle}
                subtext={val.subtext}
                link={val.link}
              />
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default ExampleProps;
