import React from "react";

import Todo from "./todo/Todo";

const Test1 = () => {
  const fname = "Shraddha";
  const lname = "Chhatraliya";
  return (
    <div className="container mt-5">
      <h1>Template Literals</h1>
      <p>{`Output is : ${fname} ${lname}`}</p>

      {/* todo app */}
      <Todo />
    </div>
  );
};

export default Test1;
