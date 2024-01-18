import {useFormik} from 'formik';
import {Text, View} from 'react-native';
import {NewBeneficiarySchema} from '../../schema';
import {Button, Input, useModal} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../RootStack';
import {useAppDispatch} from '../../redux/store';
import {setSelected} from '../../redux/actions/user';

type NewBeneficiaryProps = NativeStackNavigationProp<
  RootStackParamList,
  'NewBeneficiary'
>;

const NewBeneficiary = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NewBeneficiaryProps>();
  const {openModal, closeModal} = useModal();

  const {handleChange, handleBlur, values, touched, errors, handleSubmit} =
    useFormik({
      validationSchema: NewBeneficiarySchema,
      initialValues: {
        acount: '12345678',
        name: 'Id',
      },
      onSubmit: async () => {
        const rand = Math.random() * 2;
        if (rand >= 1) {
          openModal('error', {
            onOk: () => {
              navigation.replace('Home');
              closeModal();
            },
            title: 'Error',
            text: 'Somemthing Happend..., please try again later',
          });
        }
        dispatch(setSelected(values));
        navigation.navigate('Amount');
      },
    });

  return (
    <View style={{padding: 15, gap: 10, justifyContent: 'space-around'}}>
      <Text>NewBeneficiary</Text>
      <View style={{flex: 1}}>
        <Input
          title="Acount Number"
          placeHolder="ffffffff"
          value={`${values.acount}`}
          touched={touched.acount}
          error={errors.acount}
          handleChange={handleChange('acount')}
          handleBlur={handleBlur('acount')}
        />
        <Input
          title="Account Name"
          placeHolder="Demo Demoian"
          value={`${values.name}`}
          touched={touched.name}
          error={errors.name}
          handleChange={handleChange('name')}
          handleBlur={handleBlur('name')}
        />
      </View>

      <Button onClick={handleSubmit}>Continue</Button>
    </View>
  );
};

export default NewBeneficiary;
