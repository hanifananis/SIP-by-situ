import { Button, FormControl, FormErrorMessage, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { Formik } from 'formik'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import SubmitButton from '../../../components/SubmitButton';
import { useEffect, useState } from 'react';
import { useCommentContext } from '../../../context/ForumProvider';
import { commentSchema } from '../../../schemas/commentSchema';

const EditCommentModal = ({ commentId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { comment, updateCommentList } = useCommentContext();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/comments/${commentId}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error Fetching Data: ', error)
      });
  }, [commentId]);

  const onSubmit = (values) => {
    axios
      .put(`${import.meta.env.VITE_URL}/comments/${commentId}`, {
        content: values.content,
      })
      .then(() => {
        toast.success('Edit comment berhasil');
        onClose();
        const updatedComment = axios.get(`${import.meta.env.VITE_URL}/comments`);
        updateCommentList(updatedComment.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error('Edit comment gagal');
      });
  };
  
  return (
      <>
        <Button colorScheme='green' mr={2} onClick={onOpen}>
          <i class="ph-bold ph-pencil-simple"></i>
        </Button>

        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent mx={{base: 4, md: 0}}>
            <ModalHeader>Edit Comment</ModalHeader>
            <ModalCloseButton />
            <Formik
              initialValues={{
                content: data.content || '',
              }}
              validationSchema={commentSchema}
              onSubmit={onSubmit}
            >
            {({ values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
              <form onSubmit={handleSubmit}> 
                <ModalBody>
                  <FormControl
                    id="content"
                    isInvalid={errors.content && touched.content}
                    mb={4}
                  >
                    <Input
                      name="content"
                      _placeholder={{ opacity: 1, color: 'inherit' }}
                      fontSize="sm"
                      variant='flushed'
                      type="text"
                      autoComplete="off"
                      value={values.content}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <FormErrorMessage>{errors.content}</FormErrorMessage>
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

export default EditCommentModal