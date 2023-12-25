import { Box, FormControl, FormErrorMessage, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { Formik } from 'formik'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AddButton from '../../components/AddButton'
import SubmitButton from '../../components/SubmitButton'
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { forumSchema } from '../../schemas/forumSchema'
import AddButtonMobile from '../../components/AddButtonMobile';

const AddTopikModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    const openModal = () => {
        if (!isLoggedIn) {
            toast.error('You need to log in first.');
            navigate('/login');
            return;
        }

        onOpen();
    };

    const onSubmit = (values) => {
        axios
            .post(`${import.meta.env.VITE_URL}/forums`, {
                judul: values.judul,
                isi: values.isi,
                penulis_id: Cookies.get('user_id'),
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
            <Box display={{base: 'none', md: 'block'}}>
                <AddButton title={'Forum'} onOpen={openModal} />
            </Box>

            <Box display={{base: 'block', md: 'none'}}>
                <AddButtonMobile onOpen={openModal} />
            </Box>
    
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent mx={{base: 4, md: 0}}>
                <ModalHeader>Add Forum</ModalHeader>
                <ModalCloseButton />
                <Formik
                    initialValues={{
                        judul: '',
                        isi: '',
                    }}
                    validationSchema={forumSchema}
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