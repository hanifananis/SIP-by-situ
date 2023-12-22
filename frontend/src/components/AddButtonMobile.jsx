import { Button } from '@chakra-ui/react'
import { Plus } from '@phosphor-icons/react/dist/ssr'
import React from 'react'

const AddButtonMobile = ({ onOpen }) => {
  return (
    <Button 
      rounded={'full'} 
      p={2} 
      colorScheme='blue' 
      onClick={onOpen} 
      position={'fixed'}
      bottom={4} 
      right={4}
      zIndex={4}
    >
      <Plus size={24} />
    </Button>
  )
}

export default AddButtonMobile