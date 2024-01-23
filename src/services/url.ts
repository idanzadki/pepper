import {GET_BENEFECIARY_URL, GET_USER_URL} from '../utils/consts';

export const apiUrl = () => ({
  baseUrl: 'baseUrl',
  users: {
    getUser: GET_USER_URL,
    getBeneficiaryList: GET_BENEFECIARY_URL,
  },
});
