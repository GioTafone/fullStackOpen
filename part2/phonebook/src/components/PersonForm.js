import React from 'react'

const PersonForm = ({ name, phoneNumber, handlePersonChange, addPerson}) => {
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
        value={phoneNumber}
        onChange={handlePersonChange}
        name="phoneNumber"
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