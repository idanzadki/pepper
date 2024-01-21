import {getBeneficiaryUrl, getUserUrl} from '../utils/consts';

export const apiUrl = () => ({
  baseUrl: 'baseUrl',
  users: {
    getUser: getUserUrl,
    getBeneficiaryList: getBeneficiaryUrl,
  },
});
