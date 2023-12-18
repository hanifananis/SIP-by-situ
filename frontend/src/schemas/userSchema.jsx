import * as yup from 'yup'

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
        .min(10, "No telepon minimal 10 angka")
        .max(13)
        .required("No telepon wajib diisi"),
    roles: yup
        .string()
        .required("Roles wajib diisi"),
});