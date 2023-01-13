import * as yup from 'yup';
import { isStrValidTest } from '../utilities/isStrValidTest'

export const registerValidationSchema = yup.object().shape({
    first_name: yup.string().min(2, "Must be more then one character").required("First name is required").test('has simbol or number','Must use only letters without simbols or numbers', isStrValidTest),
    surname: yup.string().min(2, "Must be more then one character").required("Surname is required").test('has simbol or number','Must use only letters without simbols or numbers', isStrValidTest),
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string()
    .required('No password provided.') 
    .min(3, 'Password is too short - should be 3 chars minimum.'),
    confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm password'),
  });

  export const loginValidationSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string()
    .required('No password provided.') 
    .min(3, 'Password is too short - should be 3 chars minimum.'),
  });