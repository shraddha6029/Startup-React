import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
  FormGroup,
  Input,
  ListGroup
} from "reactstrap";

import ToDoList from "./TodoList";

const Todo = () => {
  const [inputList, setInputList] = useState("");

  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const addNewList = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteEvent = (id) => {
    console.log(id + " is deleted");
    setItems((oldItems) => {
      return oldItems.filter((ele, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <Row>
        <Col md="6">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Todo List</CardTitle>
              <FormGroup>
                <Input
                  type="text"
                  placeholder="Add Task here"
                  value={inputList}
                  onChange={itemEvent}
                />
              </FormGroup>
              <Button color="primary" className="mt-2" onClick={addNewList}>
                Add
              </Button>

              {/* TASKS */}
              <ListGroup className="mt-4">
                {items.map((val, index) => {
                  return (
                    <ToDoList
                      text={val}
                      key={index}
                      id={index}
                      onSelect={deleteEvent}
                    />
                  );
                })}
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Todo;
