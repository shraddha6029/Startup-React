import React from "react";

const Test2 = () => {
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();
  return (
    <>
      <hr />
      <h1>Time</h1>
      <p>current date: {currDate} </p>
      <p>current time: {currTime} </p>
    </>
  );
};

export default Test2;
