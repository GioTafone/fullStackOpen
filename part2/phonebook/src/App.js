import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas" },
    { name: "Diego Maradona" },
    { name: "Kobe Bryant" },
    { name: "Roger Federer" },
  ]);
  const [newName, setNewName] = useState("");

  const handlePersonChange = (e) => {
    setNewName(e.target.value);
  };

  const addPerson = (e) => {
    e.preventDefault();
    const newPersonsObject = {
      name: newName,
    };
    const isNameAlreadyAdded = persons.some(
      (person) => person.name === newName
    );
    if (isNameAlreadyAdded) {
      alert(`${newName} already added in the Phonebook`);
      return;
    }
    setPersons(
      isNameAlreadyAdded ? [...persons] : persons.concat(newPersonsObject)
    );
    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </div>
  );
};

export default App;