import {useCallback, useEffect} from 'react';
import {
  setError,
  setLoading,
  setUser,
  updateBeneficiary,
  updateUser,
} from '../redux/actions/user';
import {useAppDispatch, useAppSelector} from '../redux/store';
import {Api} from '../services/api';
import {User} from '../models/User';
import {Beneficiary} from './../models/Beneficiary';

export const useUser = () => {
  const dispatch = useAppDispatch();

  const {user, loading, error} = useAppSelector(state => state.userReducer);

  const handleSetError = useCallback(
    (error: string) => {
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
  const handleGetUser = useCallback(() => {
    dispatch(setLoading(true));
    setTimeout(async () => {
      const res = await Api.get('https://api.npoint.io/3fc8f279899456907de0');
      const user = res.data;
      dispatch(setUser(user));
      dispatch(setLoading(false));
    }, 400);
  }, [dispatch]);

  const handleUpdateUser = useCallback(
    async (user: User) => {
      const update = {...user, modified_at: new Date().valueOf()};
      dispatch(updateUser(update));
    },
    [dispatch],
  );
  const handleUpdateBeneficiary = useCallback(
    async (beneficiary: Beneficiary[]) => {
      user && dispatch(updateUser({...user, beneficiaryList: beneficiary}));
    },
    [dispatch],
  );

  const handleGetBeneficiary = useCallback(async () => {
    if (!user?.beneficiaryList) {
      dispatch(setLoading(true));
      setTimeout(async () => {
        const res = await Api.get('https://api.npoint.io/76e59c76f1d150e47618');
        const list = res.data.contacts;
        user && dispatch(updateUser({...user, beneficiaryList: list}));
        dispatch(setLoading(false));
      }, 500);
    }
  }, [dispatch, user]);

  useEffect(() => {}, []);

  return {
    user,
    loading,
    error,
    handleUpdateUser,
    handleUpdateBeneficiary,
    handleSetError,
    handleSetLoading,
    handleGetUser,
    handleGetBeneficiary,
  };
};
