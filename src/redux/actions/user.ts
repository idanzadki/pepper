import {createAction} from '@reduxjs/toolkit';
import {User} from '../../models/User';

export const setUser = createAction<User>('SET_USER');
export const updateUser = createAction<User>('UPDATE_USER');
export const setLoading = createAction<boolean>('SET_LOADING');
export const setError = createAction<null | string | Error>('SET_ERROR');
