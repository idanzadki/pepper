import {Text, View} from 'react-native';
import {useFormik} from 'formik';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '../../redux/store';
import {RootStackParamList} from '../RootStack';
import {Button, Input, useModal} from '../../components';
import {transferSchema} from '../../schema';
import {useUser} from '../../hooks/useUser';
import {styles} from './style';

type AmountProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const Amount = () => {
  const {handleUpdateUser, handleSetBeneficiary, handleNewBeneficiary} =
    useUser();
  const {openModal} = useModal();
  const navigation = useNavigation<AmountProps>();
  const user = useAppSelector(s => s.userReducer.user);
  const selected = useAppSelector(s => s.userReducer.selectedBeneficiary);
  const newB = useAppSelector(s => s.userReducer.newBeneficiary);
  const balance = useAppSelector(s => s.userReducer.user?.balance) || 0;
  const error = useAppSelector(s => s.userReducer.error);

  const {handleChange, handleBlur, values, touched, errors, handleSubmit} =
    useFormik({
      validationSchema: transferSchema(balance),
      initialValues: {
        amount: 0,
      },

      onSubmit: async () => {
        if (error) {
          openModal('error', {
            title: 'Error',
            text: error.toString(),
            onOk: () => {},
          });
        } else if (user) {
          const update =
            newB != null
              ? {
                  ...user,
                  balance: balance - values.amount,
                  beneficiaryList: [...user.beneficiaryList, newB],
                }
              : {
                  ...user,
                  balance: balance - values.amount,
                };
          handleUpdateUser(update);
          handleSetBeneficiary(null);
          handleNewBeneficiary(null);

          navigation.replace('Home');
        }
      },
    });

  return (
    <View style={styles.amount}>
      <Text
        style={styles.h1}>{`כמה ברצונך להעביר אל - ${selected?.name}?`}</Text>

      <Input
        type="number-pad"
        title="סכום מבוקש"
        placeHolder="הכנס סכום"
        value={`${values.amount}`}
        touched={touched.amount}
        error={errors.amount}
        handleChange={handleChange('amount')}
        handleBlur={handleBlur('amount')}
      />

      <Button onClick={handleSubmit}>Continue</Button>
    </View>
  );
};

export default Amount;
