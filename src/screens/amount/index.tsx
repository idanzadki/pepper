import {useEffect, useMemo, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../RootStack';
import {useAppSelector} from '../../redux/store';
import {useUser} from '../../hooks/useUser';
import {Button, Input, Loading} from '../../components';
import {AutoComplete} from '../../components/autoComplete';
import {GenericScrollView} from '../../components/genericScrollView';
import {setLoading} from '../../redux/actions/user';
import {useAutoComplete} from '../../hooks/useAutoComplete';
import {ImageHandler} from '../../utils/ImageHandler';
import {Colors} from '../../assets/theme/colors';
import {Benificiary} from './../../models/Beneficiary';
import {styles} from './style';
import {useFormik} from 'formik';
import {transferSchema} from '../../schema';

type AmountProps = NativeStackNavigationProp<RootStackParamList, 'Transfer'>;

const Amount = () => {
  const balance = useAppSelector(s => s.userReducer.user?.balance) || 0;
  const {handleChange, handleBlur, values, touched, errors, handleSubmit} =
    useFormik({
      validationSchema: transferSchema(balance),
      initialValues: {
        amount: 0,
      },

      onSubmit: async () => {
        console.log('Login: ', values);
        9000099;
      },
    });

  const navigation = useNavigation<AmountProps>();
  // const loading = useAppSelector(s => s.userReducer.loading);

  return (
    <View style={styles.amount}>
      <Text style={styles.h1}>{'מה הסכום המבוקש?'}</Text>

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

      {/* {loading && <Loading />} */}
    </View>
  );
};

export default Amount;
