import { Button, FormControl, FormErrorMessage, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { Formik } from 'formik'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import SubmitButton from '../../../components/SubmitButton';
import { forumSchema } from '../../../schemas/forumSchema';
import { useEffect, useState } from 'react';
import { useForumContext } from '../../../context/ForumProvider';

const EditForumModal = ({ forumId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { forum, updateForumList } = useForumContext();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/forums/${forumId}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error Fetching Data: ', error)
      });
  }, [forumId]);

  const onSubmit = (values) => {
    axios
      .put(`${import.meta.env.VITE_URL}/forums/${forumId}`, {
        judul: values.judul,
        isi: values.isi,
      })
      .then(() => {
        toast.success('Edit forum berhasil');
        onClose();
        const updatedForum = axios.get(`${import.meta.env.VITE_URL}/forums`);
        updateForumList(updatedForum.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error('Edit forum gagal');
      });
  };
  
  return (
      <>
        <Button colorScheme='green' mr={2} onClick={onOpen}>
          <i class="ph-bold ph-pencil-simple"></i>
        </Button>

        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Forum</ModalHeader>
            <ModalCloseButton />
            <Formik
              initialValues={{
                judul: data.judul || '',
                isi: data.isi || '',
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

export default EditForumModal