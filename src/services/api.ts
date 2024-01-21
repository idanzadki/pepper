import axios from 'axios';
import {apiUrl} from './url';

const baseURL = apiUrl().baseUrl;

export const Api = axios.create({
  baseURL,
});

export const get = (path: string, params: any) => Api.get(path, params);
export const getUser = async () => {
  const res = await Api.get(apiUrl().users.getUser);
  return res.data;
};
export const getBeneficiaryList = async () => {
  const res = await Api.get(apiUrl().users.getBeneficiaryList);
  console.log('Res: ', res.data);

  return res.data.contacts;
};
