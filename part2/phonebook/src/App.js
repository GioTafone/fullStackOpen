import { useState, useEffect } from "react";

import personService from "./services/persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import PersonsList from "./components/PersonsList";
import PopupSuccessOperation from "./components/PopupSuccessOperation";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState({
    name: "",
    number: "",
  });
  const [filterPerson, setFilterPerson] = useState("");
  const [popUpSuccess, setpopUpSuccess] = useState(null);

  useEffect(() => {
    personService.getAll().then((initialPersons) => setPersons(initialPersons));
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
    const isNameAlreadyAdded = persons.find(
      (person) => person.name === newPerson.name
    );
    if (isNameAlreadyAdded) {
      if (
        window.confirm(
          `${isNameAlreadyAdded.name} is already added to phonebook. Do you want to replace the old number with the new one?`
        )
      ) {
        personService
          .updatePerson(isNameAlreadyAdded.id, newPersonsObject)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== isNameAlreadyAdded.id
                  ? person
                  : { ...person, number: returnedPerson.number }
              )
            );
          })
          .catch((error) => {
            console.log(`ERROR-------> ${error}`);
            alert(
              `Some error occured updating '${isNameAlreadyAdded.name}', please try again`
            );
          });
        setNewPerson({
          name: "",
          number: "",
        });
      }
      return;
    }
    personService
      .createPerson(newPersonsObject)
      .then((returnedPersons) => {
        setPersons(persons.concat(returnedPersons));
        setpopUpSuccess(`'${newPersonsObject.name}' was added`);
        setTimeout(() => {
          setpopUpSuccess(null);
        }, 3000);
      })
      .catch((error) => {
        console.log(`ERROR-------> ${error}`);
        alert(
          `Some error occured adding '${newPersonsObject.name}', please try again`
        );
      });
    setNewPerson({
      name: "",
      number: "",
    });
  };

  const removePerson = (id) => {
    const person = persons.find((person) => person.id === id);
    if (window.confirm(`Delete ${person.name}`)) {
      personService.deletePerson(person.id).catch((error) => {
        console.log(`ERROR-------> ${error}`);
        alert(`Some error occured deleting '${person.name}', please try again`);
      });
      setPersons(persons.filter((person) => person.id !== id));
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <PopupSuccessOperation message={popUpSuccess} />
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
      <PersonsList
        persons={persons}
        filterPerson={filterPerson}
        handleDelete={removePerson}
      />
    </div>
  );
};

export default App;
