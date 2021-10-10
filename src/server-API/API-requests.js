import axios from 'axios';

const BASE_URL = 'http://localhost:3000/contacts';

export const fetchContacts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteContact = async id => {
  try {
    return await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error(error);
  }
};

export const postContact = async data => {
  try {
    const response = await axios.post(`${BASE_URL}`, data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
