import react, { useState } from "react";
import { Button, Container } from "reactstrap";

import ExampleColorChange from "./ExampleColorChange";
import ExampleForm from "./ExampleForm";

const UseStateHooks = () => {
  const [count, setCount] = useState(0);

  const Increase = () => {
    setCount(count + 1);
  };

  const Decrease = () => {
    setCount(count - 1);
  };

  // 2
  let currTime = new Date().toLocaleTimeString();

  const [curDate, setCurDate] = useState(currTime);

  const GetCurrentTime = () => {
    let currTime = new Date().toLocaleTimeString();
    setCurDate(currTime);
  };

  return (
    <Container className="my-5">
      <h1>Increment & Decreament Number</h1>
      <h2>{count}</h2>

      <Button color="danger" className="me-2" onClick={Decrease}>
        Decrement
      </Button>
      <Button color="success" onClick={Increase}>
        Increment
      </Button>
      <hr />
      {/* time example */}
      <h1 className="mt-5">Get Current Time</h1>
      <h2>{curDate}</h2>
      <Button color="primary" onClick={GetCurrentTime}>
        Get Time
      </Button>

      {/* color change */}
      <ExampleColorChange />

      {/* form */}
      <ExampleForm />
    </Container>
  );
};

export default UseStateHooks;
