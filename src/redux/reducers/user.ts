import {createReducer} from '@reduxjs/toolkit';
import {setError, setLoading, setUser, updateUser} from '../actions/user';
import {User} from '../../models/User';

interface UserReducer {
  user: User | null;
  error: Error | string | null;
  loading: boolean;
}

const initialState: UserReducer = {
  user: null,
  error: null,
  loading: false,
};

export const userReducer = createReducer(initialState, builder => {
  builder

    .addCase(setUser, (state, action) => {
      return {...state, user: action.payload};
    })
    // .addCase(updateUser, (state, action) => {
    //   console.log('Update: ', action.payload);
    //   return {...state, user: {...action.payload}};
    // })
    .addCase(updateUser, (state, action) => {
      // console.log('Update: ', action.payload);
      return {...state, user: {...action.payload}};
    })
    .addCase(setError, (state, action) => {
      return {...state, error: action.payload};
    })
    .addCase(setLoading, (state, action) => {
      return {...state, loading: action.payload};
    });
});
