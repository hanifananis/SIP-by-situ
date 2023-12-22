import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DetailPartaiModal = ({ partaiId }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/partaiInfos/${partaiId}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error Fetching Data: ', error)
      });
  }, [partaiId]);

  return (
    <>
        <Button colorScheme='yellow' mr={2} onClick={onOpen}>
          <i class="ph-bold ph-list"></i>
        </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent mx={{base: 4, md: 0}}>
            <ModalHeader>Detail Partai</ModalHeader>
            <ModalCloseButton />
              <ModalBody>
                <FormControl
                  id="name"
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
                      value={data.name}
                      isReadOnly
                    />
                </FormControl>
                <FormControl 
                  id="no_urut"
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
                  value={data.no_urut}
                  isReadOnly
                />
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
                  value={data.ig_sosmed}
                  isReadOnly
                />
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
                  value={data.fb_sosmed}
                  isReadOnly
                />
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
                    value={data.x_sosmed}
                    isReadOnly
                  />
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
                    value={data.website}
                    isReadOnly
                  />
                </FormControl>
                <FormControl 
                  id="foto"
                  mb={4}
                >
                  <FormLabel fontSize={'sm'}>
                    Foto
                  </FormLabel>
                  <Input
                    name='foto'
                    _placeholder={{ opacity: 1, color: 'inherit' }}
                    fontSize="sm"
                    variant='flushed'
                    type="text"
                    autoComplete="off"
                    value={data.foto}
                    isReadOnly
                  />
                </FormControl>
              </ModalBody>
          </ModalContent>
        </Modal>
      </>
  )
}

export default DetailPartaiModal