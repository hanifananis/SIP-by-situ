import * as yup from 'yup'

const passwordRules = /^.{8,}$/;

export const registerSchema = yup.object().shape({
    name: yup
        .string()
        .required("Nama wajib diisi"),
    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email wajib diisi"),
    no_telp: yup
        .string()
        .min(10, "No telepon minimal 10 angka")
        .max(13)
        .required("No telepon wajib diisi"),
    password: yup
        .string()
        .min(8)
        .matches(passwordRules, {message: "Please create a stronger password"})
        .required("Password wajib diisi"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], "Passwords must match")
});