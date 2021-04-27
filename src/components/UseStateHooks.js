import react, { useState } from "react";
import { Button, Container } from "reactstrap";

const UseStateHooks = () => {
  const [count, setCount] = useState(0);

  const Increase = () => {
    setCount(count + 1);
  };

  const Decrease = () => {
    setCount(count - 1);
  };

  return (
    <Container className="mt-5">
      <h1>{count}</h1>
      <Button color="success" className="me-2" onClick={Increase}>
        Increment
      </Button>
      <Button color="danger" onClick={Decrease}>
        Decreament
      </Button>
    </Container>
  );
};

export default UseStateHooks;
