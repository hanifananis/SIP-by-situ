import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Stack, useDisclosure } from '@chakra-ui/react'
import { Formik } from 'formik'
import React, { useState } from 'react'
import axios from 'axios'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AddButton from '../../components/AddButton'
import SubmitButton from '../../components/SubmitButton'
import GreenTransparentButton from '../../components/GreenTransparentButton'

const AddTopikModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const onSubmit = (values) => 
    {
        axios
            .post(`http://localhost:5000/forums`, {
                judul: values.name,
                isi: values.isi,
                penulis_id: "6552f01a6444c5f49dacab2e"
            })
            .then(() => {
                toast.success('Add forum berhasil');
                onClose();
            })
            .catch((error) => {
                console.log(error);
                toast.error('Add forum gagal')
            })
    }
    
    return (
        <>
            <AddButton title={'Topik'} onOpen={onOpen} />
    
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add Topik</ModalHeader>
                <ModalCloseButton />
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        no_telp: '',
                        password: '',
                        roles: ''
                    }}
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

export default AddTopikModal