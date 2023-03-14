import React from "react";

import Part from "./Part";
import Total from "./Total";

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <div key={part.id}>
          <Part name={part.name} exercise={part.exercises} />
        </div>
      ))}
      <Total parts={parts} />
    </>
  );
};

export default Content;