import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newPerson, setNewPerson] = useState({
    name: "",
    number: "",
  });
  const [filterPerson, setFilterPerson] = useState("");

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
      filter shown with:
      <input value={filterPerson} onChange={handlePersonFilter} />
      <h3>Add a new Contact</h3>
      <form>
        <div>
          name:{" "}
          <input
            value={newPerson.name}
            onChange={handlePersonChange}
            name="name"
          />
          number:{" "}
          <input
            value={newPerson.number}
            onChange={handlePersonChange}
            name="number"
          />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {searchPerson.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}
        </li>
      ))}
    </div>
  );
};

export default App;
