import {createAction} from '@reduxjs/toolkit';
import {User} from '../../models/User';
import {Beneficiary} from '../../models/Beneficiary';

export const setUser = createAction<User>('SET_USER');
export const setSelected = createAction<Beneficiary>('SET_SELECTED');
export const setNew = createAction<Beneficiary>('SET_NEW');
export const updateUser = createAction<User>('UPDATE_USER');
export const updateBeneficiary =
  createAction<Beneficiary[]>('UPDATE_BENEFICIARY');
export const setLoading = createAction<boolean>('SET_LOADING');
export const setError = createAction<null | string | Error>('SET_ERROR');
