import * as yup from 'yup'

export const forumSchema = yup.object().shape({
    judul: yup
        .string()
        .required("Judul forum wajib diisi"),
    isi: yup
        .string()
        .required("Isi forum wajib diisi"),
});