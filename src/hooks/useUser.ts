import {Api, getBeneficiaryList, getUser} from '../services/api';
import {useAppDispatch, useAppSelector} from '../redux/store';
import {
  setError,
  setLoading,
  setNew,
  setSelected,
  setUser,
  updateUser,
} from '../redux/actions/user';
import {User, Beneficiary} from '../models';
import {callBackWrapper} from '../utils/helpers';
import {GET_USER_URL} from '../utils/consts';

export const useUser = () => {
  const dispatch = useAppDispatch();

  const {user, loading, error} = useAppSelector(state => state.userReducer);

  const handleSetError = callBackWrapper((error: string) => {
    dispatch(setError(error));
  });

  const handleSetLoading = callBackWrapper((loading: boolean) => {
    dispatch(setLoading(loading));
  });

  const handleGetUser = callBackWrapper(() => {
    try {
      dispatch(setLoading(true));
      setTimeout(async () => {
        const {data: user} = (await Api.get(GET_USER_URL)) as {data: User};
        if (user && Object.keys(user).length > 0) {
          dispatch(setUser(user));
        } else {
          handleSetError('No User Exist');
        }
        dispatch(setLoading(false));
        return user;
      }, 400);
    } catch (error) {
      handleSetError('Server Error');
    }
  });

  const handleUpdateUser = callBackWrapper(async (user: User) => {
    const update = {...user, modified_at: new Date().valueOf()};
    dispatch(updateUser(update));
  });

  const handleUpdateBeneficiary = callBackWrapper(
    async (beneficiary: Beneficiary[]) => {
      user && dispatch(updateUser({...user, beneficiaryList: beneficiary}));
    },
    [],
  );

  const handleNewBeneficiary = callBackWrapper(
    async (beneficiary: Beneficiary) => {
      dispatch(setNew(beneficiary));
    },
  );
  const handleSetBeneficiary = callBackWrapper(
    async (beneficiary: Beneficiary) => {
      dispatch(setSelected(beneficiary));
    },
  );

  const handleGetBeneficiary = callBackWrapper(async () => {
    if (!user?.beneficiaryList) {
      dispatch(setLoading(true));
      setTimeout(async () => {
        const list = await getBeneficiaryList();
        user && dispatch(updateUser({...user, beneficiaryList: list}));
        dispatch(setLoading(false));
      }, 500);
    }
  });

  return {
    user,
    loading,
    error,
    handleSetBeneficiary,
    handleNewBeneficiary,
    handleUpdateUser,
    handleUpdateBeneficiary,
    handleSetError,
    handleSetLoading,
    handleGetUser,
    handleGetBeneficiary,
  };
};
