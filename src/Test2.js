import React from "react";

const Test2 = () => {
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();
  return (
    <div className="container mt-5">
      <h1>Time</h1>
      <p>current date: {currDate} </p>
      <p>current time: {currTime} </p>
    </div>
  );
};

export default Test2;
