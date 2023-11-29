import { Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Stack, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import { userSchema } from '../../../schemas/userSchema'
import axios from 'axios'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useUserContext } from '../../../context/UserProvider'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

const EditUserModal = ({ userId }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { users, updateUserList } = useUserContext()

    const [showPassword, setShowPassword] = useState(false)
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
          .get(`http://localhost:5000/users/${userId}`)
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
            .patch(`http://localhost:5000/users/${userId}`, {
                name: values.name,
                email: values.email,
                no_telp: values.no_telp,
                password: values.password,
                roles: values.roles
            })
            .then(() => {
                toast.success('Edit user berhasil');
                onClose();
                const updatedUsers = axios.get('http://localhost:5000/users');
                updateUserList(updatedUsers.data);
            })
            .catch((error) => {
                console.log(error);
                toast.error('Edit user gagal');
            })
    }

    return (
      <>
        <Button colorScheme='green' mr={2} onClick={onOpen}><i class="ph-bold ph-pencil-simple"></i></Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit User</ModalHeader>
            <ModalCloseButton />
            <Formik
                initialValues={{
                    name: data.name || '',
                    email: data.email || '',
                    no_telp: data.no_telp || '',
                    password: data.password || '',
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
                            id="password"
                            isInvalid={errors.password && touched.password}
                            mb={4}
                        >
                            <FormLabel fontSize={'sm'}>
                            Kata Sandi
                            </FormLabel>
                            <InputGroup>
                                <Input
                                    _placeholder={{ opacity: 1, color: 'inherit' }}
                                    fontSize="sm"
                                    variant='flushed'
                                    type={showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange} 
                                    onBlur={handleBlur}
                                />
                                <InputRightElement h={'full'}>
                                    <Button
                                    variant='unstyled'
                                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <FormErrorMessage>{errors.password}</FormErrorMessage>
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
                            <ModalFooter>
                                <Button
                                    type="submit"
                                    colorScheme='blue'
                                    rounded={'50'}
                                    mx={'auto'}
                                    w={1/3}
                                >
                                    Submit
                                </Button>
                            </ModalFooter>
                        </ModalBody>
                    </form>
                )}
            </Formik>
          </ModalContent>
        </Modal>
      </>
    )
}

export default EditUserModal