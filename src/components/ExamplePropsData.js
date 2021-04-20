import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const ExamplePropsData = (props) => {
  console.log(props);
  return (
    <Card>
      <CardImg top width="100%" src={props.imgsrc} alt="Card image cap" />
      <CardBody>
        <CardTitle tag="h5">{props.title}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {props.subtitle}
        </CardSubtitle>
        <CardText>{props.subtext}</CardText>
        <Button color="primary" href="{props.link}">
          Learn More
        </Button>
      </CardBody>
    </Card>
  );
};

export default ExamplePropsData;
