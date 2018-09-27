import axios from 'axios';

export const apiUrl = 'https://randomuser.me/api/';

export const restApi = axios.create({
  baseURL: apiUrl,
});
