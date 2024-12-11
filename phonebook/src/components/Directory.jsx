import Entry from './Entry.jsx';
const Directory = ({ persons, setPersons }) => {
  return (
    <table>
      <tbody>
      {persons.map(person => <Entry key={person.name} person={person} setPersons={setPersons} persons={persons} /> )}
      </tbody>
    </table>
  )
}

export default Directory;