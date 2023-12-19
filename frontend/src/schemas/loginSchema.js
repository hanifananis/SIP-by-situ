import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email wajib diisi"),
    password: yup
        .string()
        .required("Password wajib diisi"),
});