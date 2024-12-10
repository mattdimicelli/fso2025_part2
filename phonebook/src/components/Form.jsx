const Form = ({ handleSubmit, newName, handleChangeName, newNumber, handleChangeNumber }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={newName} onChange={handleChangeName}/>
      </div>
      <label htmlFor='number'>number:</label>
      <input value={newNumber} onChange={handleChangeNumber}/>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default Form;