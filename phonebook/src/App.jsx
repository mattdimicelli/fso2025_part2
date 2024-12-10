import { useState, useEffect } from 'react';
import axios from 'axios';
import Directory from './components/Directory.jsx'
import Form from './components/Form.jsx'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(res => setPersons(res.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }))
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
      <Directory persons={persons}/>
    </div>
  )
}

export default App