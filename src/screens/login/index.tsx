import {useEffect, useState} from 'react';
import {View, Text, KeyboardAvoidingView} from 'react-native';
import {useFormik} from 'formik';
import {Colors} from '../../assets/theme/colors';
import {loginValidationSchema} from '../../schema';
import {useUser} from '../../hooks/useUser';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {Button, Input, Loading, useModal} from '../../components';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../RootStack';
import {useNavigation} from '@react-navigation/native';

type LoginProps = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const Login = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<LoginProps>();
  const {handleSetError, handleSetLoading, handleGetUser} = useUser();
  const {error = '', loading = true, user} = useAppSelector(s => s.userReducer);
  const {openModal, closeModal} = useModal();

  const handleError = (error: any) => {
    console.log('Handle: ', error.message);

    handleSetError(error.message);
    openModal('error', {
      onOk: () => closeModal(),
      title: 'Error!',
      text: error.message,
    });
    handleSetLoading(false);

    // throw Error('Login Error');
  };

  const {handleChange, handleBlur, values, touched, errors, handleSubmit} =
    useFormik({
      validationSchema: loginValidationSchema,
      initialValues: {
        userName: 'user',
        password: '12345678',
      },

      onSubmit: async () => {
        // console.log('Login: ', values);
        handleSetLoading(true);
        // await handleGetUser();

        navigation.navigate('Home');
      },
    });

  useEffect(() => {
    // console.log('loadijng: ', loading);
  }, [loading]);

  return (
    <View
      style={{
        height: '100%',
        padding: 15,
      }}>
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
      <Text
        style={{
          flex: 0.2,
          textAlign: 'left',
          color: Colors.systemDarkGray,
          marginVertical: 20,
        }}>
        We'll call or text to confirm your number, Standard message and data
        rates apply
      </Text>
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
              // handleError(error);
              // handleSetLoading(false);
            }
          }}>
          Continue
        </Button>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

// import {Text, View} from 'react-native';

// const Login = () =>
//  (
//   <View>
//     <Text>Login</Text>
//   </View>
// );

// export default Login;
