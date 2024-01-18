import {Benificiary} from './Beneficiary';

export interface User {
  acount: string;
  balance: number;
  username: string;
  beneficiaryList?: Benificiary[];
}
