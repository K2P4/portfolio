import * as Yup from 'yup';

export const knowledgeSchema = Yup.object().shape({
  textContent: Yup.string().nullable().when('file', {
    is: (file) => !file,
    then: (schema) => schema.required('Provide either text content or a PDF document'),
    otherwise: (schema) => schema.notRequired(),
  }),
  file: Yup.mixed().nullable().when('textContent', {
    is: (textContent) => !textContent || textContent.length === 0,
    then: (schema) => schema.required('Provide either text content or a PDF document'),
    otherwise: (schema) => schema.notRequired(),
  }),
}, [['textContent', 'file']]);
