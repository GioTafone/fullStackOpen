import React from "react";
import Persons from "./Persons";

const PersonsList = ({ persons, filterPerson}) => {
  const searchPerson = persons.filter((person) =>
    person.name.toLowerCase().startsWith(filterPerson)
  );
  return (
    <div>
      {" "}
      {searchPerson.map((person) => (
        <Persons key={person.name} name={person.name} number={person.number} />
      ))}
    </div>
  );
};

export default PersonsList;
