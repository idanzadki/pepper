import {useFormik} from 'formik';
import {Text, View} from 'react-native';
import {NewBeneficiarySchema} from '../../schema';
import {Button, Input, useModal} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../RootStack';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {setSelected} from '../../redux/actions/user';
import {useUser} from '../../hooks/useUser';
import {useEffect} from 'react';

type NewBeneficiaryProps = NativeStackNavigationProp<
  RootStackParamList,
  'NewBeneficiary'
>;

const NewBeneficiary = () => {
  const {handleSetError, handleNewBeneficiary, handleSetBeneficiary} =
    useUser();
  const navigation = useNavigation<NewBeneficiaryProps>();
  const {openModal, closeModal} = useModal();
  const error = useAppSelector(s => s.userReducer.error);

  const {handleChange, handleBlur, values, touched, errors, handleSubmit} =
    useFormik({
      validationSchema: NewBeneficiarySchema,
      initialValues: {
        acount: '12345678',
        name: 'Name',
      },
      onSubmit: async () => {
        const rand = Math.random() * 2;
        console.log('rand: ', rand);
        if (rand > 1) {
          handleSetError(
            'Cannot Create new Beneficiary: ',
            values.name || 'No Name',
          );
        } else {
          handleNewBeneficiary(values);
          handleSetBeneficiary(values);
          navigation.navigate('Amount');
        }
      },
    });

  useEffect(() => {
    error != null &&
      openModal('error', {
        title: 'Error',
        text: error.toString(),
        onOk: () => {
          navigation.replace('Home');
          handleSetError(null);
          closeModal();
        },
      });
  }, [error]);

  return (
    <View style={{flex: 1, padding: 15, gap: 10, justifyContent: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: 25}}>מוטב חדש</Text>
      <View style={{flex: 1}}>
        <Input
          title="חשבון מוטב"
          placeHolder="מספר חשבון מוטב"
          value={`${values.acount}`}
          touched={touched.acount}
          error={errors.acount}
          handleChange={handleChange('acount')}
          handleBlur={handleBlur('acount')}
        />
        <Input
          title="שם המוטב"
          placeHolder="Demo Demoian"
          value={`${values.name}`}
          touched={touched.name}
          error={errors.name}
          handleChange={handleChange('name')}
          handleBlur={handleBlur('name')}
        />
      </View>

      <Button onClick={handleSubmit}>{'המשך'}</Button>
    </View>
  );
};

export default NewBeneficiary;
