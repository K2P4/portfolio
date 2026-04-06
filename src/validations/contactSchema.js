import * as yup from 'yup';

export const contactSchema = yup.object({
  email: yup.string().required('email is required').email('invalid email format'),
  name: yup.string().required('name is required'),
  message: yup.string(),
});
