import * as yup from 'yup'

const formSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Name must be at least 3 characters long')
    .required('Name is Required'),
  size: yup
    .string()
    .oneOf(['small', 'medium', 'large', 'xl'], 'you must select a size')
    .required('Must choose size of pizza'),
  specialInstruction: yup
    .string()
    .notRequired()
})

export default formSchema
