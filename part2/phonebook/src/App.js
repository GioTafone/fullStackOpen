import { useState, useEffect } from "react";
import axios from 'axios'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({
    name: "",
    number: "",
  });
  const [filterPerson, setFilterPerson] = useState("");

  useEffect(() => {
    console.log("Effect ran")
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
    })
  }, [])
  console.log('render', persons.length, 'persons')

  const searchPerson = persons.filter((person) =>
    person.name.toLowerCase().startsWith(filterPerson)
  );

  const handlePersonFilter = (e) => {
    setFilterPerson(e.target.value);
  };

  const handlePersonChange = (e) => {
    setNewPerson((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const addPerson = (e) => {
    e.preventDefault();
    const newPersonsObject = {
      name: newPerson.name,
      number: newPerson.number,
    };
    const isNameAlreadyAdded = persons.some(
      (person) => person.name === newPerson.name
    );
    if (isNameAlreadyAdded) {
      alert(`${newPerson.name} already added in the Phonebook`);
      return;
    }
    setPersons(
      isNameAlreadyAdded ? [...persons] : persons.concat(newPersonsObject)
    );
    setNewPerson({
      name: "",
      number: "",
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filterPerson={filterPerson}
        handlePersonFilter={handlePersonFilter}
      />
      <h3>Add a new Contact</h3>
      <PersonForm
        name={newPerson.name}
        number={newPerson.number}
        handlePersonChange={handlePersonChange}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      {searchPerson.map((person) => (
        <Persons key={person.name} name={person.name} number={person.number} />
      ))}
    </div>
  );
};

export default App;
