import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Stack, useDisclosure } from '@chakra-ui/react'
import { Formik } from 'formik'
import axios from 'axios'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AddButton from '../../components/AddButton'
import SubmitButton from '../../components/SubmitButton'

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