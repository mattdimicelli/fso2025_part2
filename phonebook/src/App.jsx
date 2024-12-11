import { useState, useEffect } from 'react';
import Directory from './components/Directory.jsx'
import Form from './components/Form.jsx'
import httpService from './services/httpService.js';
const { getDirectory, postEntry } = httpService;

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    getDirectory().then(persons => setPersons(persons));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
    } else {
      postEntry({ name: newName, number: newNumber })
        .then(updatedPerson => setPersons(persons.concat(updatedPerson)));
    }
    setNewName('')
    setNewNumber('')
  }

  const handleChangeName = (e) => {
    setNewName(e.target.value)
  }

  const handleChangeNumber = (e) => {
    setNewNumber(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Form handleChangeNumber={handleChangeNumber} handleSubmit={handleSubmit} handleChangeName={handleChangeName}
            newName={newName} newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Directory persons={persons} setPersons={setPersons} />
    </div>
  )
}

export default App