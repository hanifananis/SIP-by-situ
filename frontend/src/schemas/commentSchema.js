import * as yup from 'yup'

export const commentSchema = yup.object().shape({
    content: yup
        .string()
        .required("Judul forum wajib diisi")
});