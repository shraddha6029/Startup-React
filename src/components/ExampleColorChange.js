import react, { useState } from "react";

import { Button, ButtonGroup } from "reactstrap";

const ExampleColorChange = () => {
  const green = "#d4edda";
  const [bgColor, setbgColor] = useState(green);

  const GetbgColor = () => {
    const purple = "#cce5ff";
    setbgColor(purple);
  };

  const GetbgColor2 = () => {
    const red = "#f8d7da";
    setbgColor(red);
  };

  const GetbgColor3 = () => {
    const yellow = "#fff3cd";
    setbgColor(yellow);
  };

  return (
    <>
      <h4 className="mt-5">Change color</h4>

      <div style={{ background: bgColor }} className="p-3">
        React Navbar
      </div>

      <ButtonGroup className="mt-3 ">
        <Button color="info" onClick={GetbgColor}>
          Info
        </Button>
        <Button color="danger" onClick={GetbgColor2}>
          Danger
        </Button>
        <Button color="warning" onClick={GetbgColor3}>
          Warning
        </Button>
      </ButtonGroup>
    </>
  );
};

export default ExampleColorChange;
