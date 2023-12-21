import * as yup from 'yup'

const passwordRules = /^.{8,}$/;

export const changePasswordSchema = yup.object().shape({
    oldPassword: yup
        .string()
        .min(8)
        .matches(passwordRules, {message: "Please create a stronger password"})
        .required("Password wajib diisi"),
    newPassword: yup
        .string()
        .min(8)
        .matches(passwordRules, {message: "Please create a stronger password"})
        .required("Password wajib diisi"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], "Passwords must match")
});