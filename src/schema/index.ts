import * as Yup from 'yup';
import NewBeneficiary from './../screens/newBeneficiary/index';

export const phoneRegExp =
  /^[\\+]?[(]?[0-9]{0}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/;

export const mailRegExp = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const loginValidationSchema = Yup.object().shape({
  userName: Yup.string().required('שם משתמש חובה').min(1),
  password: Yup.string().required('ססמא חובה').min(8),
});

export const NewBeneficiarySchema = () =>
  Yup.object().shape({
    name: Yup.string().required('שם מוטב חובה').min(2),
    acount: Yup.string().required('מספר חשבון חובה').min(8),
  });

export const transferSchema = (maxAmount: number) =>
  Yup.object().shape({
    amount: Yup.number()
      .required('שזה סכום הוא חובה')
      .min(1, () => 'סכום העברה חייב להיות גדול מ 0')
      .max(maxAmount, () => `סכום העברה חייב להיות קטן מ ${maxAmount}`),
  });
