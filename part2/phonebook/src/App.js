import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import PersonsList from "./components/PersonsList";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({
    name: "",
    number: "",
  });
  const [filterPerson, setFilterPerson] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

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
      <PersonsList persons={persons} filterPerson={filterPerson} />
    </div>
  );
};

export default App;
