import { Button, Checkbox, CheckboxGroup, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import GreenButton from '../../components/GreenButton'

const DapilModal = ({ names, onSelect }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [selectedValue, setSelectedValue] = useState([]);

    const handleSelectedValue = (values) => {
        setSelectedValue(values);
    }

    const handleSubmit = () => {
        onSelect(selectedValue);
        onClose();
    }

    return (
      <>
        <GreenButton onClick={onOpen} title={'Filter Dapil'} />

        <Modal onClose={onClose} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Pilih Daerah Pemilihan</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <CheckboxGroup colorScheme='green' value={selectedValue} onChange={handleSelectedValue}>
                    {names.map((val) => (
                        <Stack spacing={[1, 5]} direction={['column', 'row']} key={val}>
                            <Checkbox value={val}>{val}</Checkbox>
                        </Stack>
                    ))}
                </CheckboxGroup>
            </ModalBody>
            <ModalFooter>
                <Button onClick={handleSubmit}>Submit</Button>
                <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default DapilModal