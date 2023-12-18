import * as yup from 'yup'

export const contentSchema = yup.object().shape({
    content: yup
        .string()
});