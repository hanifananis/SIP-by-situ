import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card, FormControl, FormErrorMessage, Heading, Text } from '@chakra-ui/react';
import RedInput from '../components/RedInput';
import GreenTransparentButton from '../components/GreenTransparentButton';
import { Formik } from 'formik';
import { userSchema } from '../schemas/userSchema';

export const EditUsername = ({ userId }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
          .get(`${import.meta.env.VITE_URL}/users/${userId}`)
          .then(response => {
            setData(response.data.name);
          })
          .catch(error => {
            console.error('Error Fetching Data: ', error)
          });
    }, [userId]);
    
    
    const onSubmit = (values) =>
    {
        axios
            .patch(`${import.meta.env.VITE_URL}/users/${userId}`, {
                name: values.name,
            })
            .then(() => {
                toast.success('Edit username berhasil');
                onClose();
            })
            .catch((error) => {
                console.log(error);
                toast.error('Edit username gagal');
            })
    }

    return (
        <>
            <Heading fontSize={'2xl'} fontWeight={'semibold'}>Ganti Username</Heading>
            <Card gap={4} p={8} mt={4}>
                <Formik
                    initialValues={{
                        name: data || '',
                    }}
                    validationSchema={userSchema}
                    onSubmit={onSubmit}
                >
                    {({ values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                                <FormControl
                                    id="name"
                                    isInvalid={errors.name && touched.name}
                                    mb={4}
                                >
                                    <Text fontWeight={'semibold'} pb={4}>Username Baru</Text>
                                    <RedInput 
                                        isi={'Masukkan Username'} 
                                        val={values.name} 
                                        nameInput={"name"} 
                                        formChange={handleChange}
                                        formBlur={handleBlur}
                                    />
                                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                                </FormControl>
                                <GreenTransparentButton title={'Simpan'} />
                        </form>
                    )}
                </Formik>
            </Card>
        </>
    )
}
