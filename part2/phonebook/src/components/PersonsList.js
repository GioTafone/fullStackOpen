import React from "react";
import Persons from "./Persons";

const PersonsList = ({ persons, filterPerson, handleDelete }) => {
  const searchPerson = persons.filter((person) =>
    person.name.toLowerCase().startsWith(filterPerson)
  );
  return (
    <div>
      {" "}
      {searchPerson.map((person) => (
        <Persons
          key={person.id}
          name={person.name}
          phoneNumber={person.phoneNumber}
          handleDelete={() => handleDelete(person.id)}
        />
      ))}
    </div>
  );
};

export default PersonsList;