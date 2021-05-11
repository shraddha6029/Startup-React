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
  List,
  ListInlineItem
} from "reactstrap";

const Todo = () => {
  const [inputList, setInputList] = useState("Buy Fruits");

  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const addNewList = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
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
                  onChange={itemEvent}
                />
              </FormGroup>
              <Button color="primary" className="mt-2" onClick={addNewList}>
                Add
              </Button>

              {/* TASKS */}
              <List className="mt-4">
                {items.map((val, index) => {
                  return <ListInlineItem key="index">{val}</ListInlineItem>;
                })}
              </List>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Todo;
