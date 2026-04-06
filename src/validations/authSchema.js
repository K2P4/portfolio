import * as Yup from 'yup';

export const authSchema = Yup.object({
  email: Yup.string().required('email is required').email('invalid email format'),
  password: Yup.string().required('password is required'),
});
