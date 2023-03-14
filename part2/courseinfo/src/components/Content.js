import React from "react";

import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <div key={part.name}>
          <Part name={part.name} exercise={part.exercises} />
        </div>
      ))}
    </>
  );
};

export default Content;
