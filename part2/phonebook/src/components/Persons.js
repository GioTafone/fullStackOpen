import React from "react";

const Persons = ({ name, number, handleDelete }) => {
  return (
    <li>
      {name} {number} <button onClick={handleDelete}>Delete Contact</button>
    </li>
  );
};

export default Persons;
