import React from "react";

const Test1 = () => {
  const fname = "Shraddha";
  const lname = "Chhatraliya";
  return (
    <>
      <hr />
      <h1>Template Literals</h1>
      <p>{`Output is : ${fname} ${lname}`}</p>
    </>
  );
};

export default Test1;
