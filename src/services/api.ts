import axios from 'axios';
import { apiUrl } from './url';



const baseURL = apiUrl().baseUrl

export const Api = axios.create({
  baseURL,
});
