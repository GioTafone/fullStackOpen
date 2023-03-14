import React from 'react'

const PersonForm = ({ name, number, handlePersonChange, addPerson}) => {
  return (
    <form>
    <div>
      name:{" "}
      <input
        value={name}
        onChange={handlePersonChange}
        name="name"
      />
      number:{" "}
      <input
        value={number}
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
  )
}

export default PersonForm