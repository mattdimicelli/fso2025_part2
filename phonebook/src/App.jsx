import { useState, useEffect } from 'react';
import Directory from './components/Directory.jsx'
import Notification from './components/Notification.jsx'
import Form from './components/Form.jsx'
import httpService from './services/httpService.js';
const { getDirectory, postEntry } = httpService;

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [notification, setNotification] = useState('');

  useEffect(() => {
    (async () => {
      const persons = await getDirectory();
      setPersons(persons);
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const entry = await postEntry({ name: newName, number: newNumber });
      if (entry.newEntry) {
        setPersons(persons.concat(entry.entry))
      } else {
        setPersons(persons.filter(person => person.name !== newName).concat(entry.entry))
      }
    } catch (e) {
      setNotification(e.response.data.error);
      setTimeout(() => setNotification(''), 3000);
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
      <Notification message={notification} />
      <Form handleChangeNumber={handleChangeNumber} handleSubmit={handleSubmit} handleChangeName={handleChangeName}
            newName={newName} newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Directory persons={persons} setPersons={setPersons} />
    </div>
  )
}

export default App