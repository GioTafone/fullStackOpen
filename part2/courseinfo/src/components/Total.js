import React from "react";

const Total = ({ parts }) => {
    
  const initalValue = 0;
  const totalExercises = parts.reduce(function (sum, part) {
    return sum + part.exercises;
  }, initalValue);

  return <b>Total is: {totalExercises}</b>;
};

export default Total;