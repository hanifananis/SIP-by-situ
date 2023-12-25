import { Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup, Stack, Textarea, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import axios from 'axios'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import SubmitButton from '../../../components/SubmitButton'

const EditPaslonModal = ({ paslonId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/paslons/${paslonId}`)
      .then(response => {
        console.log(response.data)
        setData(response.data);
      })
      .catch(error => {
        console.error('Error Fetching Data: ', error)
      });
  }, [paslonId]);

  const onSubmit = (values) =>
  {
    axios
      .put(`${import.meta.env.VITE_URL}/paslons/${userId}`, {
        capres: values.capres,
        cawapres: values.cawapres,
        no_urut: values.no_urut,
        deskripsi: values.deskripsi,
        visi: values.visi,
        misi: values.misi,
        partai_pengusung: values.partai_pengusung,
        capres_img_url: values.capres_img_url,
        cawapres_img_url: values.cawapres_img_url
      })
      .then(() => {
        toast.success('Edit user berhasil');
        onClose();
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
          <ModalHeader>Edit Paslon</ModalHeader>
          <ModalCloseButton />
          <Formik
            initialValues={{
              capres: data.capres || '',
              cawapres: data.cawapres || '',
              no_urut: data.no_urut || '',
              deskripsi: data.deskripsi || '',
              visi: data.visi || '',
              misi: data.misi || '',
              partai_pengusung: data.partai_pengusung || '',
              capres_img_url: data.capres_img_url || '',
              cawapres_img_url: data.cawapres_img_url || ''
            }}
            onSubmit={onSubmit}
          >
          {({ values, errors, touched, handleBlur, handleChange, handleSubmit}) => (
            <form onSubmit={handleSubmit}>
              <ModalBody>
                <FormControl
                  id="capres"
                  isInvalid={errors.capres && touched.capres}
                  mb={4}
                >
                  <FormLabel fontSize={'sm'}>
                    Calon Presiden
                  </FormLabel>
                  <Input
                    name="capres"
                    _placeholder={{ opacity: 1, color: 'inherit' }}
                    fontSize="sm"
                    variant='flushed'
                    type="text"
                    autoComplete="off"
                    value={values.capres}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <FormErrorMessage>{errors.capres}</FormErrorMessage>
                </FormControl>
                <FormControl 
                  id="cawapres"
                  isInvalid={errors.cawapres && touched.cawapres}
                  mb={4}
                >
                  <FormLabel fontSize={'sm'}>
                    Calon Wakil Presiden
                  </FormLabel>
                  <Input
                    name="cawapres"
                    _placeholder={{ opacity: 1, color: 'inherit' }}
                    fontSize="sm"
                    variant='flushed'
                    autoComplete="off"
                    value={values.cawapres}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <FormErrorMessage>{errors.cawapres}</FormErrorMessage>
              </FormControl>
              <FormControl 
                id="no_urut"
                mb={4}
              >
                <FormLabel fontSize={'sm'}>
                  No Urut
                </FormLabel>
                <Input
                  name='no_urut'
                  _placeholder={{ opacity: 1, color: 'inherit' }}
                  fontSize="sm"
                  variant='flushed'
                  type="text"
                  autoComplete="off"
                  value={values.no_urut}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FormErrorMessage>{errors.no_urut}</FormErrorMessage>
              </FormControl>
              <FormControl 
                id="deskripsi"
                mb={4}
              >
                <FormLabel fontSize={'sm'}>
                  Deskripsi
                </FormLabel>
                <Textarea
                  name='deskripsi'
                  _placeholder={{ opacity: 1, color: 'inherit' }}
                  fontSize="sm"
                  variant='flushed'
                  type="text"
                  autoComplete="off"
                  value={values.deskripsi}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FormErrorMessage>{errors.deskripsi}</FormErrorMessage>
              </FormControl>
              <FormControl 
                id="visi"
                mb={4}
              >
                <FormLabel fontSize={'sm'}>
                  Visi
                </FormLabel>
                <Input
                  name='visi'
                  _placeholder={{ opacity: 1, color: 'inherit' }}
                  fontSize="sm"
                  variant='flushed'
                  type="text"
                  autoComplete="off"
                  value={values.visi}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FormErrorMessage>{errors.visi}</FormErrorMessage>
              </FormControl>
              <FormControl 
                id="misi"
                mb={4}
              >
                <FormLabel fontSize={'sm'}>
                  Misi
                </FormLabel>
                <Textarea
                  name='misi'
                  _placeholder={{ opacity: 1, color: 'inherit' }}
                  fontSize="sm"
                  variant='flushed'
                  type="text"
                  autoComplete="off"
                  value={values.misi}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FormErrorMessage>{errors.misi}</FormErrorMessage>
              </FormControl>
              <FormControl 
                id="capres_img_url"
                mb={4}
              >
                <FormLabel fontSize={'sm'}>
                  Capres Image
                </FormLabel>
                <Input
                  type='file'
                  name='capres_img_url'
                  _placeholder={{ opacity: 1, color: 'inherit' }}
                  fontSize="sm"
                  variant={'unstyled'}
                  rounded={'none'}
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FormErrorMessage>{errors.capres_img_url}</FormErrorMessage>
              </FormControl>
              <FormControl 
                id="cawapres_img_url"
                mb={4}
              >
                <FormLabel fontSize={'sm'}>
                  cawapres Image
                </FormLabel>
                <Input
                  type='file'
                  name='cawapres_img_url'
                  _placeholder={{ opacity: 1, color: 'inherit' }}
                  fontSize="sm"
                  variant={'unstyled'}
                  rounded={'none'}
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FormErrorMessage>{errors.cawapres_img_url}</FormErrorMessage>
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

export default EditPaslonModal