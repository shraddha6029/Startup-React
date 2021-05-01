import react, { useState } from "react";

import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  Row,
  Col
} from "reactstrap";

const ExampleForm = () => {
  const [name, setName] = useState();
  const [fullname, setFullName] = useState();

  const inputChange = (event) => {
    setName(event.target.value);
    // console.log(event.target.value);
  };

  const onSubmit = (e) => {
    setFullName(name);
    e.preventDefault();
  };

  return (
    <>
      <h4 className="mt-5">Form</h4>
      <Row>
        <Col md="6">
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Full Name</Label>
              <Input type="text" placeholder="Name" onChange={inputChange} />
            </FormGroup>
            <Button onClick={onSubmit} className="mt-3" color="primary">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md="6">
          <Card>
            <CardBody>
              <label>Name:</label>
              <h6>{fullname}</h6>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ExampleForm;
