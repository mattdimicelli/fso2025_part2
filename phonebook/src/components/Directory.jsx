import Entry from './Entry.jsx';
const Directory = ({ persons }) => {
  return (
    <table>
      <tbody>
      {persons.map(person => <Entry key={person.name} person={person} /> )}
      </tbody>
    </table>
  )
}

export default Directory;