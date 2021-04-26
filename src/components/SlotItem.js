import React from "react";
import { ListInlineItem } from "reactstrap";

const SlotItem = (props) => {
  if (props.x === props.y && props.y === props.z) {
    return (
      <ListInlineItem className="p-3 border">
        <div className="d-flex">
          <h6>{props.x}</h6>
          <h6>{props.y}</h6>
          <h6>{props.z}</h6>
        </div>
        It is Matching
      </ListInlineItem>
    );
  } else {
    return (
      <ListInlineItem className="p-3 border">
        <div className="d-flex">
          <h6>{props.x}</h6>
          <h6>{props.y}</h6>
          <h6>{props.z}</h6>
        </div>
        It is not Matching
      </ListInlineItem>
    );
  }
};

export default SlotItem;
