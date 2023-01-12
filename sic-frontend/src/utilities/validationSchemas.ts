import * as yup from 'yup';

export const registerValidationSchema = yup.object().shape({
    first_name: yup.string().required(),
    surname: yup.number().required(),
    email: yup.string().email('Invalid email').required('Required'),
    password: yup.string()
    .required('No password provided.') 
    .min(3, 'Password is too short - should be 3 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  });

//   schema.cast({
//     name: 'jimmy',
//     age: '24',
//     createdOn: '2014-09-23T19:25:25Z',
//   });