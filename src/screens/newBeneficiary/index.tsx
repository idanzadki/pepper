import {useFormik} from 'formik';
import {Text, View} from 'react-native';
import {NewBeneficiarySchema} from '../../schema';
import {Button, Input, useModal} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../RootStack';

type NewBeneficiaryProps = NativeStackNavigationProp<
  RootStackParamList,
  'NewBeneficiary'
>;

const NewBeneficiary = () => {
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
        console.log('Transfer: ', rand);
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

        navigation.navigate('Amount');
      },
    });

  return (
    <View>
      <Text>NewBeneficiary</Text>

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

      <Button onClick={handleSubmit}>Continue</Button>
    </View>
  );
};

export default NewBeneficiary;
