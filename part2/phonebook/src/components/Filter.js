import React from "react";

const Filter = ({ filterPerson, handlePersonFilter }) => {
  return (
    <>
      <h2>Filter shown with:</h2>
      <input value={filterPerson} onChange={handlePersonFilter} />
    </>
  );
};

export default Filter;
