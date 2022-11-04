import * as Yup from 'yup';

// export const LoginSchema = Yup.object({
//   email: Yup.string().email().min(8).max(60).required(),
// });

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

export const LoginSchema = Yup.object({
  phoneNumber: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Must enter a phone number'),
});

export const SignupSchema = Yup.object({
  phoneNumber: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Must enter a phone number'),
  email: Yup.string()
    .email()
    .min(8)
    .max(60)
    .required('Must enter a phone number'),
  birthday: Yup.date().required('Must enter a phone number'),
  confirmAge: Yup.bool(),
});
