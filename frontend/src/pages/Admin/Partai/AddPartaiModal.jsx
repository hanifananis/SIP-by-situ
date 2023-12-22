import { FormControl, FormErrorMessage, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { Formik } from 'formik'
import axios from 'axios'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import SubmitButton from '../../../components/SubmitButton'
import { usePartaiContext } from '../../../context/PartaiProvider'
import { partaiSchema } from '../../../schemas/partaiSchema'
import AddButton from '../../../components/AddButton';

const AddPartaiModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { partai, updatePartaiList } = usePartaiContext()

  const onSubmit = (values) =>
  {
    axios
      .post(`${import.meta.env.VITE_URL}/partaiInfos`, {
        name: values.name,
        no_urut: values.no_urut,
        ig_sosmed: values.ig_sosmed,
        fb_sosmed: values.fb_sosmed,
        x_sosmed: values.x_sosmed,
        website: values.website,
        foto: values.foto,
      })
      .then(() => {
        toast.success('Add partai berhasil');
        onClose();
        const updatedPartai = axios.get(`${import.meta.env.VITE_URL}/partaiInfos`);
        updatePartaiList(updatedPartai.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error('Add partai gagal');
      })
  }

  return (
    <>
      <AddButton title={'Partai'} onOpen={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mx={{base: 4, md: 0}}>
          <ModalHeader>Add Partai</ModalHeader>
          <ModalCloseButton />
          <Formik
            initialValues={{
              name: '',
              no_urut: '',
              ig_sosmed: '',
              fb_sosmed: '',
              x_sosmed: '',
              website: '',
              foto: '',
            }}
            validationSchema={partaiSchema}
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
                    Nama Partai
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
                  id="no_urut"
                  isInvalid={errors.no_urut && touched.no_urut}
                  mb={4}
                >
                  <FormLabel fontSize={'sm'}>
                    No Urut
                  </FormLabel>
                  <Input
                    name="no_urut"
                    _placeholder={{ opacity: 1, color: 'inherit' }}
                    fontSize="sm"
                    variant='flushed'
                    autoComplete="off"
                    value={values.no_urut}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <FormErrorMessage>{errors.no_urut}</FormErrorMessage>
                </FormControl>
                <FormControl 
                  id="ig_sosmed"
                  mb={4}
                >
                  <FormLabel fontSize={'sm'}>
                    Instagram
                  </FormLabel>
                  <Input
                    name='ig_sosmed'
                    _placeholder={{ opacity: 1, color: 'inherit' }}
                    fontSize="sm"
                    variant='flushed'
                    type="text"
                    autoComplete="off"
                    value={values.ig_sosmed}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <FormErrorMessage>{errors.ig_sosmed}</FormErrorMessage>
                </FormControl>
                <FormControl 
                  id="x_sosmed"
                  mb={4}
                >
                  <FormLabel fontSize={'sm'}>
                    X
                  </FormLabel>
                  <Input
                    name='x_sosmed'
                    _placeholder={{ opacity: 1, color: 'inherit' }}
                    fontSize="sm"
                    variant='flushed'
                    type="text"
                    autoComplete="off"
                    value={values.x_sosmed}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <FormErrorMessage>{errors.x_sosmed}</FormErrorMessage>
                </FormControl>
                <FormControl 
                  id="fb_sosmed"
                  mb={4}
                >
                  <FormLabel fontSize={'sm'}>
                    Facebook
                  </FormLabel>
                  <Input
                    name='fb_sosmed'
                    _placeholder={{ opacity: 1, color: 'inherit' }}
                    fontSize="sm"
                    variant='flushed'
                    type="text"
                    autoComplete="off"
                    value={values.fb_sosmed}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <FormErrorMessage>{errors.fb_sosmed}</FormErrorMessage>
                </FormControl>
                <FormControl 
                  id="website"
                  mb={4}
                >
                  <FormLabel fontSize={'sm'}>
                    Website
                  </FormLabel>
                  <Input
                    name='website'
                    _placeholder={{ opacity: 1, color: 'inherit' }}
                    fontSize="sm"
                    variant='flushed'
                    type="text"
                    autoComplete="off"
                    value={values.website}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <FormErrorMessage>{errors.website}</FormErrorMessage>
                </FormControl>
                <FormControl 
                  id="foto"
                  mb={4}
                >
                  <FormLabel fontSize={'sm'}>
                    Foto
                  </FormLabel>
                  <Input
                    type='file'
                    name='foto'
                    _placeholder={{ opacity: 1, color: 'inherit' }}
                    fontSize="sm"
                    variant={'unstyled'}
                    rounded={'none'}
                    autoComplete="off"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <FormErrorMessage>{errors.foto}</FormErrorMessage>
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

export default AddPartaiModal