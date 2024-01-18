import {useCallback, useEffect} from 'react';
import {setError, setLoading, setUser, updateUser} from '../redux/actions/user';
import {useAppDispatch, useAppSelector} from '../redux/store';
import {Api} from '../services/api';
import {apiUrl} from '../services/url';
import {User} from '../models/User';

export const useUser = () => {
  const dispatch = useAppDispatch();

  const {user, loading, error} = useAppSelector(state => state.userReducer);

  const handleSetError = useCallback(
    (error: string) => {
      console.log('handle Set Error: ', error);
      dispatch(setError(error));
    },
    [dispatch],
  );
  const handleSetLoading = useCallback(
    (loading: boolean) => {
      dispatch(setLoading(loading));
    },
    [dispatch],
  );
  const handleGetUser = useCallback(async () => {
    dispatch(setLoading(true));
    setTimeout(async () => {
      const res = await Api.get('https://api.npoint.io/3fc8f279899456907de0');
      const user = res.data;
      // console.log('User: ', user);
      dispatch(setUser(user));
      dispatch(setLoading(false));
    }, 1500);
  }, [dispatch]);

  const handleUpdateUser = useCallback(
    async (user: User) => {
      const update = {...user, modified_at: new Date().valueOf()};
      // console.log('User: ', update);
      dispatch(updateUser(update));
      // await storeData('user', JSON.stringify(update));

      // await Api.put(apiUrl().users.update, update);
    },
    [dispatch],
  );

  const handleGetBeneficiary = useCallback(async () => {
    dispatch(setLoading(true));
    setTimeout(async () => {
      const res = await Api.get('https://api.npoint.io/76e59c76f1d150e47618');
      const list = res.data.contacts;
      // console.log('Benificiary List: ', list);
      user && dispatch(updateUser({...user, beneficiaryList: list}));
      dispatch(setLoading(false));
    }, 1500);
  }, [dispatch]);

  useEffect(() => {}, []);

  return {
    user,
    loading,
    error,
    handleSetError,
    handleSetLoading,
    handleGetUser,
    handleGetBeneficiary,
  };
};
