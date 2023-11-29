import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Stack, useDisclosure } from '@chakra-ui/react'
import { Plus } from "@phosphor-icons/react"
import { Formik } from 'formik'
import React, { useState } from 'react'
import axios from 'axios'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useUserContext } from '../../../context/UserProvider'
import { userSchema } from '../../../schemas/userSchema'
import SubmitButton from '../../../components/SubmitButton'
import AddButton from '../../../components/AddButton'

const AddUserModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { users, updateUserList } = useUserContext()

    const [showPassword, setShowPassword] = useState(false)

    const onSubmit = (values) =>
    {
        axios
            .post(`http://localhost:5000/users`, {
                name: values.name,
                email: values.email,
                no_telp: values.no_telp,
                password: values.password,
                roles: values.roles
            })
            .then(() => {
                toast.success('Add user berhasil');
                onClose();
                const updatedUsers = axios.get('http://localhost:5000/users');
                updateUserList(updatedUsers.data);
            })
            .catch((error) => {
                console.log(error);
                toast.error('Add user gagal');
            })
    }

    return (
      <>
        <AddButton title={'User'} onOpen={onOpen} />
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add User</ModalHeader>
            <ModalCloseButton />
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    no_telp: '',
                    password: '',
                    roles: ''
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
                            isInvalid={errors.no_telp && touched.no_telp}
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

export default AddUserModal