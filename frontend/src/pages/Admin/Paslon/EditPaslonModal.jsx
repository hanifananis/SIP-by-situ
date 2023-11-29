import { Button, useDisclosure } from '@chakra-ui/react'
import React from 'react'

const EditPaslonModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <>
      <Button colorScheme='green' mr={2} onClick={onOpen}><i class="ph-bold ph-pencil-simple"></i></Button>
    </>
  )
}

export default EditPaslonModal