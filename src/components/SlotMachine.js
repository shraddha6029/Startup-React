import React from "react";
import { List, Container } from "reactstrap";
import SlotData from "./Data2";

import SlotItem from "./SlotItem";

const SlotMachine = () => {
  return (
    <Container className="mt-5">
      <List>
        {SlotData.map((val, index) => {
          return <SlotItem x={val.x} y={val.y} z={val.z} />;
        })}
      </List>
    </Container>
  );
};

export default SlotMachine;
