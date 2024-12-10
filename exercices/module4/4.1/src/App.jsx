import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const filterPerson = (event) => {
    event.preventDefault();
    const filters = persons.filter(person => person.name.toLowerCase().includes(newName.toLowerCase()))
    return filters
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onKeyUp={filterPerson}>
        <input type="text" />
      </form>
      <h2>Numbers</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input type='text' 
          value={newName}
          onChange={(event) => setNewName(event.target.value)}
          />
        </div>
        <div>
          number: <input type='text' 
          value={newNumber}
          onChange={(event) => setNewNumber(event.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>

        <div>debug: {newName}</div>
        <div>debug : {newNumber}</div>
      </form>
      <ul>
        {persons.map(person => 
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        )}
      </ul>
    </div>
  )
}

export default App