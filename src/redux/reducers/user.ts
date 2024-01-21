import {createReducer} from '@reduxjs/toolkit';
import {
  setError,
  setLoading,
  setNew,
  setSelected,
  setUser,
  updateUser,
} from '../actions/user';
import {User} from '../../models/User';
import {Beneficiary} from '../../models/Beneficiary';

interface UserReducer {
  user: User | null;
  selectedBeneficiary: Beneficiary | null;
  newBeneficiary: Beneficiary | null;
  error: Error | string | null;
  loading: boolean;
}

const initialState: UserReducer = {
  user: null,
  selectedBeneficiary: null,
  newBeneficiary: null,
  error: null,
  loading: false,
};

export const userReducer = createReducer(initialState, builder => {
  builder
    .addCase(setUser, (state, action) => {
      return {...state, user: action.payload};
    })
    .addCase(setSelected, (state, action) => {
      return {...state, selectedBeneficiary: action.payload};
    })
    .addCase(setNew, (state, action) => {
      return {...state, newBeneficiary: action.payload};
    })
    .addCase(updateUser, (state, action) => {
      return {...state, user: {...action.payload}};
    })
    .addCase(setError, (state, action) => {
      return {...state, error: action.payload};
    })
    .addCase(setLoading, (state, action) => {
      return {...state, loading: action.payload};
    });
});
