import axios from 'axios';

const URL = 'http://localhost:3001/persons'
const getDirectory = () => {
  return axios
    .get(URL)
    .then(res => res.data);
}

const postEntry = (data) => {
  return axios
    .post(URL, data)
    .then(res => res.data)
}

export default {getDirectory, postEntry}