import React from "react";

import { ListGroupItem } from "reactstrap";

const ToDoList = (props) => {
  return (
    <>
      <ListGroupItem className="d-flex">
        {props.text}
        <span
          className="ms-auto"
          role="img"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          ❌
        </span>
      </ListGroupItem>
    </>
  );
};

export default ToDoList;
