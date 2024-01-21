import {View, Text, KeyboardAvoidingView} from 'react-native';
import {useFormik} from 'formik';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../../assets/theme/colors';
import {loginValidationSchema} from '../../schema';
import {useUser} from '../../hooks/useUser';
import {useAppSelector} from '../../redux/store';
import {Button, Input, Loading, useModal} from '../../components';
import {RootStackParamList} from '../RootStack';

type LoginProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const Login = () => {
  const navigation = useNavigation<LoginProps>();
  const {handleSetLoading} = useUser();
  const {error = '', loading = true, user} = useAppSelector(s => s.userReducer);
  const {openModal, closeModal} = useModal();

  const {handleChange, handleBlur, values, touched, errors, handleSubmit} =
    useFormik({
      validationSchema: loginValidationSchema,
      initialValues: {
        userName: 'User',
        password: '123456486',
      },

      onSubmit: async () => {
        handleSetLoading(true);
        navigation.navigate('Home');
      },
    });

  return (
    <View
      style={{
        justifyContent: 'center',
        height: '100%',
        padding: 15,
        backgroundColor: Colors.white,
      }}>
      <Text
        style={{
          flex: 0.1,
          textAlign: 'center',
          marginVertical: 20,
          fontSize: 25,
          fontWeight: 'bold',
        }}>
        {'Hello Pepper'}
      </Text>

      <View style={{flex: 0.6}}>
        <Input
          title="User Name"
          placeHolder="User Name"
          value={values.userName}
          touched={touched.userName}
          error={errors.userName}
          handleChange={handleChange('userName')}
          handleBlur={handleBlur('userName')}
        />
        <Input
          type="password"
          title="Password"
          placeHolder="Password"
          value={values.password}
          touched={touched.password}
          error={errors.password}
          handleChange={handleChange('password')}
          handleBlur={handleBlur('password')}
        />
      </View>

      {loading && (
        <Loading style={{justifyContent: 'center', alignItems: 'center'}} />
      )}
      {error && <Text>Error: {JSON.stringify(error)}</Text>}
      <KeyboardAvoidingView style={{flex: 0.1}}>
        <Button
          disabled={loading}
          color="Green"
          onClick={() => {
            try {
              handleSubmit();
            } catch (error) {
              openModal('default', {
                onOk: () => closeModal(),
                title: 'Error!',
                text: 'Error',
              });
            }
          }}>
          {'התחבר'}
        </Button>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
