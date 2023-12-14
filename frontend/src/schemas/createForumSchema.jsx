import * as yup from 'yup'

export const createForumSchema = yup.object().shape({
    judul: yup
        .string()
        .required("Judul forum wajib diisi"),
    isi: yup
        .string()
        .required("Isi forum wajib diisi"),
});