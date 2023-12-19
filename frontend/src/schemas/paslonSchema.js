import * as yup from 'yup'

export const paslonSchema = yup.object().shape({
    capres: yup
        .string()
        .required("Nama Calon Presiden wajib diisi"),
    cawapres: yup
        .string()
        .required("Calon Wakil Presiden wajib diisi"),
    no_urut: yup
        .number()
        .required("No urut wajib diisi"),
});