import { BASE_URL } from '../constants';
import { GET_PREFILL_DATA, SUBMIT_DATA } from '../constants/endpoints';
import axios from 'axios';

export const getPrefillData = async () => {
  const url = `${BASE_URL}${GET_PREFILL_DATA}`;
  const response = await axios.get(url);
  const { email, firstName, lastName } = response.data.data;

  return { email, firstName, lastName };
};

export const createData = async (formData) => {
  const url = `${BASE_URL}${SUBMIT_DATA}`;
  return await axios.post(url, formData);
};
