import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/contacts',
});

export const getContacts = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const delContacts = async id => {
  const { data } = await instance.delete(`/${id}`);
  return data;
};

export const addContacts = async data => {
  const { data: result } = await instance.post('/', data);
  return result;
};
