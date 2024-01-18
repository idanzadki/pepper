import {Beneficiary} from './Beneficiary';

export interface User {
  acount: string;
  balance: number;
  username: string;
  beneficiaryList: Beneficiary[];
}
