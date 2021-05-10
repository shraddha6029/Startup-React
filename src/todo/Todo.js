import React from "react";
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
  return (
    <>
      <Row>
        <Col md="6">
          <Card>
            <CardBody>
              <CardTitle tag="h5">Todo List</CardTitle>
              <FormGroup>
                <Input type="text" name="todo" placeholder="Add Task here" />
              </FormGroup>
              <Button color="primary" className="mt-2">
                Add
              </Button>

              {/* TASKS */}
              <List className="mt-4">
                <ListInlineItem>Buy Pen</ListInlineItem>
              </List>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Todo;
