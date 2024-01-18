import * as Yup from 'yup';
import NewBeneficiary from './../screens/newBeneficiary/index';

export const phoneRegExp =
  /^[\\+]?[(]?[0-9]{0}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/;

export const mailRegExp = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const loginValidationSchema = Yup.object().shape({
  userName: Yup.string().required('User Name Is Required!').min(1),
  password: Yup.string().required('Password Is Required!').min(8),
  // .test('emailPhone', 'Invalid email or phone number', (value) => {
  //   if (mailRegExp.test(value)) {
  //     return true;
  //   } else if (phoneRegExp.test(value)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }),
});

export const NewBeneficiarySchema = () =>
  Yup.object().shape({
    name: Yup.string().required('Name Is Required!').min(2),
    acount: Yup.string().required('Acount Number Is Required!').min(8),
  });

export const transferSchema = (maxAmount: number) =>
  Yup.object().shape({
    amount: Yup.number()
      .required('User Name Is Required!')
      .min(1)
      .max(maxAmount),
  });
