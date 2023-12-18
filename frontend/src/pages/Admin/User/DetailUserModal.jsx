import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DetailUserModal = ({ userId }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_URL}/users/${userId}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error Fetching Data: ', error)
            });
    }, [userId]);

    return (
      <>
        <Button colorScheme='yellow' mr={2} onClick={onOpen}>
            <i class="ph-bold ph-list"></i>
        </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Detail User</ModalHeader>
            <ModalCloseButton />
                <ModalBody>
                    <FormControl
                        id="name"
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
                            value={data.name}
                            isReadOnly
                        />
                    </FormControl>
                    <FormControl 
                        id="email"
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
                            value={data.email}
                            isReadOnly
                        />
                    </FormControl>
                    <FormControl 
                        id="no_telp"
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
                            value={data.no_telp}
                            isReadOnly
                        />
                    </FormControl>
                    <FormControl 
                        id="roles"
                        mb={4}
                    >
                        <FormLabel fontSize={'sm'}>
                            Roles
                        </FormLabel>
                        <Input
                            name='roles'
                            _placeholder={{ opacity: 1, color: 'inherit' }}
                            fontSize="sm"
                            variant='flushed'
                            type="text"
                            autoComplete="off"
                            value={data.roles}
                            isReadOnly
                        />
                    </FormControl>
                    <FormControl 
                        id="createdAt"
                        mb={4}
                    >
                        <FormLabel fontSize={'sm'}>
                            Created At
                        </FormLabel>
                        <Input
                            name='createdAt'
                            _placeholder={{ opacity: 1, color: 'inherit' }}
                            fontSize="sm"
                            variant='flushed'
                            type="text"
                            autoComplete="off"
                            value={data.createdAt}
                            isReadOnly
                        />
                    </FormControl>
                    <FormControl 
                        id="updatedAt"
                        mb={4}
                    >
                        <FormLabel fontSize={'sm'}>
                            Updated At
                        </FormLabel>
                        <Input
                            name='updatedAt'
                            _placeholder={{ opacity: 1, color: 'inherit' }}
                            fontSize="sm"
                            variant='flushed'
                            type="text"
                            autoComplete="off"
                            value={data.updatedAt}
                            isReadOnly
                        />
                    </FormControl>
                </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
}

export default DetailUserModal