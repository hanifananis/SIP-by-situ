import * as yup from 'yup'

export const usernameSchema = yup.object().shape({
    name: yup
        .string()
        .required("Nama wajib diisi")
});