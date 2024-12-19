import axios from 'axios';

//const URL = 'http://localhost:3001/api/persons';
const URL = '/api/persons'
const getDirectory = async () => {
  const response = await axios.get(URL);
  return response.data;
}

const postEntry = async (data) => {
  const response = await axios.post(URL, data);
  return response.data;
}

const deleteEntry = async (id) => {
  const response = await axios.delete(`${URL}/${id}`);
  return response.status === 204;
}

export default { getDirectory, postEntry, deleteEntry }