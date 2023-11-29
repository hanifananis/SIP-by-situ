import * as yup from 'yup'

const passwordRules = /^(?=.*[a-z])(?=.*[a-zA-Z]).{5,}$/;

export const userSchema = yup.object().shape({
    name: yup
        .string()
        .required("Nama wajib diisi"),
    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email wajib diisi"),
    no_telp: yup
        .string()
        .min(12, "No telepon minimal 12 angka")
        .max(12)
        .required("No telepon wajib diisi"),
    password: yup
        .string()
        .min(6)
        .matches(passwordRules, {message: "Please create a stronger password"})
        .required("Password wajib diisi"),
    roles: yup
        .string()
        .required("Roles wajib diisi"),
});