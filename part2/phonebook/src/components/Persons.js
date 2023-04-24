import React from "react";

const Persons = ({ name, phoneNumber, handleDelete }) => {

  return (
    <li className='person'>
      {name} {phoneNumber} <button onClick={handleDelete}>Delete Contact</button>
    </li>
  );
};

export default Persons;
