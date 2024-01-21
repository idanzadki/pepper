import {getBeneficiaryList, getUser} from '../services/api';
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
    dispatch(setLoading(true));
    setTimeout(async () => {
      const user = await getUser();
      dispatch(setUser(user));
      dispatch(setLoading(false));
    }, 400);
  });

  const handleUpdateUser = callBackWrapper(async (user: User) => {
    const update = {...user, modified_at: new Date().valueOf()};
    dispatch(updateUser(update));
  });

  const handleUpdateBeneficiary = callBackWrapper(
    async (beneficiary: Beneficiary[]) => {
      user && dispatch(updateUser({...user, beneficiaryList: beneficiary}));
    },
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
        console.log('lIST: ', list);

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
