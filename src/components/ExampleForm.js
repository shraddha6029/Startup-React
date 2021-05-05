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
    // setName(event.target.value);
    console.log(event.target.name);
    console.log(event.target.value);
  };

  const submitEvent = (e) => {
    setFullName(name);
    e.preventDefault();
  };

  // 2
  const [newFullName, setNewFullName] = useState({
    fname: "",
    lname: ""
  });

  const formInputChange = (event) => {
    // setName(event.target.value);
    console.log(event.target.name);
    console.log(event.target.value);

    const name = event.target.name;
    const value = event.target.value;

    setNewFullName((preValue) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: preValue.lname
        };
      } else if (name === "lname") {
        return {
          fname: preValue.fname,
          lname: value
        };
      }
    });
  };

  const newOnSubmit = (e) => {
    // setFullName(name);
    e.preventDefault();
  };

  return (
    <>
      <h4 className="mt-5">Form</h4>
      <Row>
        <Col md="6">
          <form onSubmit={submitEvent}>
            <FormGroup>
              <Label for="exampleEmail">Full Name</Label>
              <Input type="text" placeholder="Name" onChange={inputChange} />
            </FormGroup>
            <Button type="submit" className="mt-3" color="primary">
              Submit
            </Button>
          </form>
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

      <h4 className="mt-5">Form with object</h4>
      <h5 className="text-primary">
        {newFullName.fname} {newFullName.lname}
      </h5>
      <form onSubmit={newOnSubmit}>
        <FormGroup>
          <Label for="exampleEmail">First Name</Label>
          <Input
            type="text"
            placeholder="First Name"
            onChange={formInputChange}
            name="fname"
            value={newFullName.fname}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Last Name</Label>
          <Input
            type="text"
            placeholder="Last Name"
            onChange={formInputChange}
            name="lname"
            value={newFullName.lname}
          />
        </FormGroup>
        <Button type="submit" className="mt-3" color="primary">
          Submit
        </Button>
      </form>
    </>
  );
};

export default ExampleForm;
