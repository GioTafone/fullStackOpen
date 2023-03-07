import React from "react";

import Part from "./Part";

const Content = ({ part1, exercise1, part2, exercise2, part3, exercise3 }) => {
  return (
    <>
      <Part part={part1} exercise={exercise1}/>
      <Part part={part2} exercise={exercise2}/>
      <Part part={part3} exercise={exercise3}/>
    </>
  );
};

export default Content;
