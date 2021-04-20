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
    <div className="container mt-5">
      <h2>
        Hello Shraddha, <span style={cssStyle}>{greeting}</span>
      </h2>
    </div>
  );
};

export default Test3;
