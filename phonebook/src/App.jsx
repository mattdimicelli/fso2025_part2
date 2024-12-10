import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber  , setNewNumber] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }));
    }
    setNewName('');
    setNewNumber('');
  }

  const handleChangeName = (e) => {
    setNewName(e.target.value);
  }

  const handleChangeNumber = (e) => {
    setNewNumber(e.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChangeName} />
        </div>
        <label htmlFor='number'>number:</label>
        <input value={newNumber} onChange={handleChangeNumber} />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <table>
        <tbody>
          {persons.map(person => {
            return (
              <tr key={person.name}>
                <td>{person.name}</td>
                <td>{person.number}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  )
}

export default App