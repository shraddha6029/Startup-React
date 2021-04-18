import { Button } from "reactstrap";

let currDate = new Date();
currDate = currDate.getHours();

let greeting = "";
const cssStyle = {};

if (currDate >= 1 && currDate < 12) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (currDate >= 12 && currDate < 19) {
  greeting = "Good Afternoon";
  cssStyle.color = "orange";
} else {
  greeting = "Good Night";
  cssStyle.color = "blue";
}

const Test3 = () => {
  return (
    <>
      <h2>
        Hello Shraddha, <span style={cssStyle}>{greeting}</span>
      </h2>
      <Button to="/test1" color="danger">
        Danger!
      </Button>
    </>
  );
};

export default Test3;
