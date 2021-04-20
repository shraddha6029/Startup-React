import React from "react";
import { Row, Col, Container } from "reactstrap";
import ExamplePropsData from "./ExamplePropsData";

const ExampleProps = () => {
  return (
    <>
      <Container className="mt-5">
        <Row xs="12" lg="3">
          <Col>
            <ExamplePropsData
              imgsrc="https://occ-0-2164-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdncnmk-gRk1M89pVISTDl0MpIsgKBk2swizl7pASTBUZeroQmElfVH8lrTQqLLd40FMdy2BnUv-34b5u_zybHpwASc7uYM6hrCBrGx5o5TglIp54_ln_8-x0JOq.jpg?r=93f"
              title="The Queen's Gambit"
              subtitle="Anya Taylor-Joy,Bill Camp,Marielle Heller"
              subtext="In a 1950s orphanage, a young girl reveals an astonishing talent for
            chess and begins an unlikely journey to stardom while grappling with
            addiction."
              link="https://www.netflix.com/in/title/80234304"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ExampleProps;
