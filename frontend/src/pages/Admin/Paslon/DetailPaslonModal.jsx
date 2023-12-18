import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Textarea, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const DetailPaslonModal = ({ paslonId}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/paslons/${paslonId}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error Fetching Data: ', error)
            });
        }, [paslonId]);

    return (
        <>
            <Button colorScheme='yellow' mr={2} onClick={onOpen}>
                <i class="ph-bold ph-list"></i>
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Detail Paslon</ModalHeader>
                <ModalCloseButton />
                    <ModalBody>
                        <FormControl
                            id="capres"
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
                                value={data.capres}
                                isReadOnly
                            />
                        </FormControl>
                        <FormControl 
                            id="cawapres"
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
                                value={data.cawapres}
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
                                name='no_urut'
                                _placeholder={{ opacity: 1, color: 'inherit' }}
                                fontSize="sm"
                                variant='flushed'
                                type="text"
                                autoComplete="off"
                                value={data.no_urut}
                                isReadOnly
                            />
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
                                value={data.deskripsi}
                                isReadOnly
                            />
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
                                value={data.visi}
                                isReadOnly
                            />
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
                                value={data.misi}
                                isReadOnly
                            />
                        </FormControl>
                        <FormControl 
                            id="partaiPengusung"
                            mb={4}
                        >
                            <FormLabel fontSize={'sm'}>
                                Partai Pengusung
                            </FormLabel>
                            <Textarea
                                name='partaiPengusung'
                                _placeholder={{ opacity: 1, color: 'inherit' }}
                                fontSize="sm"
                                variant='flushed'
                                type="text"
                                autoComplete="off"
                                value={data.partaiInfo ? data.partaiInfo.map(party => party.name).join(', ') : ''}
                                isReadOnly
                            />
                        </FormControl>
                    </ModalBody>
            </ModalContent>
            </Modal>
        </>
    )
}

export default DetailPaslonModal