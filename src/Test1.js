import React from "react";

const Test1 = () => {
  const fname = "Shraddha";
  const lname = "Chhatraliya";
  return (
    <div className="container mt-5">
      <h1>Template Literals</h1>
      <p>{`Output is : ${fname} ${lname}`}</p>
    </div>
  );
};

export default Test1;
