import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Stack, useDisclosure } from '@chakra-ui/react'
import { Formik } from 'formik'
import axios from 'axios'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AddButton from '../../components/AddButton'
import SubmitButton from '../../components/SubmitButton'
import GreenTransparentButton from '../../components/GreenTransparentButton'
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const AddTopikModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    const openModal = () => {
        // Check if the user is logged in
        console.log('isLoggedIn:', isLoggedIn);
        if (!isLoggedIn) {
            toast.error('You need to log in first.');

            // Redirect to the login page
            navigate('/login');
            return;
        }

        // If the user is logged in, open the modal
        onOpen();
    };

    const onSubmit = (values) => {
        axios
        .post(`http://localhost:5000/forums`, {
            judul: values.name,
            isi: values.isi,
            penulis_id: "6552f01a6444c5f49dacab2e",
        })
        .then(() => {
            toast.success('Add forum berhasil');
            onClose();
        })
        .catch((error) => {
            console.log(error);
            toast.error('Add forum gagal');
        });
    };
    
    return (
        <>
            <AddButton title={'Topik'} onOpen={openModal} />
    
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add Topik</ModalHeader>
                <ModalCloseButton />
                <Formik
                    initialValues={{
                        judul: '',
                        isi: '',
                    }}
                    onSubmit={onSubmit}
                >
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
                    <form onSubmit={handleSubmit}> 
                        <ModalBody>
                            <FormControl
                                id="judul"
                                isInvalid={errors.judul && touched.judul}
                                mb={4}
                            >
                                <FormLabel fontSize={'sm'}>
                                    Judul
                                </FormLabel>
                                <Input
                                    name="judul"
                                    _placeholder={{ opacity: 1, color: 'inherit' }}
                                    fontSize="sm"
                                    variant='flushed'
                                    type="text"
                                    autoComplete="off"
                                    value={values.judul}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <FormErrorMessage>{errors.judul}</FormErrorMessage>
                            </FormControl>
                            <FormControl 
                                id="isi"
                                isInvalid={errors.isi && touched.isi}
                                mb={4}
                            >
                                <FormLabel fontSize={'sm'}>
                                Isi
                                </FormLabel>
                                <Input
                                    name="isi"
                                    _placeholder={{ opacity: 1, color: 'inherit' }}
                                    fontSize="sm"
                                    variant='flushed'
                                    type="text"
                                    autoComplete="off"
                                    value={values.isi}
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
                                <FormErrorMessage>{errors.isi}</FormErrorMessage>
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