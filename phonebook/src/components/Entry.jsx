import httpService from '../services/httpService.js';
const { deleteEntry } = httpService;

const Entry = ({ person, setPersons, persons }) => {

  const handleClick = () => {
    if (confirm(`Click OK to proceed with deleting ${person.name}'s entry. Otherwise click Cancel`)){
      deleteEntry(person.id).then(deleted => {
        if (deleted === true) {
          setPersons(persons.filter(persona => person.id !== persona.id));
        }
      });
    }
  }

  return (
    <tr>
      <td>{person.name}</td>
      <td>{person.number}</td>
      <td><button onClick={handleClick}>Delete</button></td>
    </tr>
  )
}

export default Entry;