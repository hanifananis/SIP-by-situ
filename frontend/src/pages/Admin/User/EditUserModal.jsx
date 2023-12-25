import { Button, FormControl, FormErrorMessage, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Stack, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import { userSchema } from '../../../schemas/userSchema'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useUserContext } from '../../../context/UserProvider'
import SubmitButton from '../../../components/SubmitButton'

const EditUserModal = ({ userId }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { users, updateUserList } = useUserContext()

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
          .get(`${import.meta.env.VITE_URL}/users/${userId}`)
          .then(response => {
            setData(response.data);
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
                email: values.email,
                no_telp: values.no_telp,
                roles: values.roles
            })
            .then(() => {
                toast.success('Edit user berhasil');
                onClose();
                const updatedUsers = axios.get(`${import.meta.env.VITE_URL}/users`);
                updateUserList(updatedUsers.data);
            })
            .catch((error) => {
                console.log(error);
                toast.error('Edit user gagal');
            })
    }

    return (
      <>
        <Button colorScheme='green' mr={2} onClick={onOpen}>
            <i class="ph-bold ph-pencil-simple"></i>
        </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent mx={{base: 4, md: 0}}>
            <ModalHeader>Edit User</ModalHeader>
            <ModalCloseButton />
            <Formik
                initialValues={{
                    name: data.name || '',
                    email: data.email || '',
                    no_telp: data.no_telp || '',
                    roles: data.roles || ''
                }}
                validationSchema={userSchema}
                onSubmit={onSubmit}
            >
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <ModalBody>
                            <FormControl
                                id="name"
                                isInvalid={errors.name && touched.name}
                                mb={4}
                            >
                                <FormLabel fontSize={'sm'}>
                                    Nama Pengguna
                                </FormLabel>
                                <Input
                                    name="name"
                                    _placeholder={{ opacity: 1, color: 'inherit' }}
                                    fontSize="sm"
                                    variant='flushed'
                                    type="text"
                                    autoComplete="off"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <FormErrorMessage>{errors.name}</FormErrorMessage>
                            </FormControl>
                            <FormControl 
                                id="email"
                                isInvalid={errors.email && touched.email}
                                mb={4}
                            >
                                <FormLabel fontSize={'sm'}>
                                Email
                                </FormLabel>
                                <Input
                                    name="email"
                                    _placeholder={{ opacity: 1, color: 'inherit' }}
                                    fontSize="sm"
                                    variant='flushed'
                                    type="email"
                                    autoComplete="off"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <FormErrorMessage>{errors.email}</FormErrorMessage>
                            </FormControl>
                            <FormControl 
                                id="no_telp"
                                mb={4}
                            >
                                <FormLabel fontSize={'sm'}>
                                    No Telepon
                                </FormLabel>
                                <Input
                                    name='no_telp'
                                    _placeholder={{ opacity: 1, color: 'inherit' }}
                                    fontSize="sm"
                                    variant='flushed'
                                    type="text"
                                    autoComplete="off"
                                    value={values.no_telp}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <FormErrorMessage>{errors.no_telp}</FormErrorMessage>
                            </FormControl>
                            <FormControl 
                                id="roles"
                                isInvalid={errors.roles && touched.roles}
                                mb={4}
                            >
                                <FormLabel fontSize={'sm'}>
                                    Roles
                                </FormLabel>
                                <RadioGroup
                                    name='roles'
                                    onChange={(value) => handleChange({ target: { name: 'roles', value } })}
                                    value={values.roles}
                                    onBlur={handleBlur}
                                >
                                    <Stack direction='row'>
                                        <Radio value='admin'>Admin</Radio>
                                        <Radio value='user'>User</Radio>
                                    </Stack>
                                </RadioGroup>
                                <FormErrorMessage>{errors.roles}</FormErrorMessage>
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <SubmitButton />
                        </ModalFooter>
                    </form>
                )}
            </Formik>
          </ModalContent>
        </Modal>
      </>
    )
}

export default EditUserModal