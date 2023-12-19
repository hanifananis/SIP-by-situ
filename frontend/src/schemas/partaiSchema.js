import * as yup from 'yup'

export const partaiSchema = yup.object().shape({
    name: yup
        .string()
        .required("Nama Partai wajib diisi"),
    no_urut: yup
        .number()
        .required("No urut wajib diisi"),    
});