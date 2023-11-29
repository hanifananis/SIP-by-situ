import { Button, useDisclosure } from '@chakra-ui/react'
import { Plus } from '@phosphor-icons/react'
import React from 'react'

const AddButton = ({ title, onOpen }) => {
    return (
        <Button 
            colorScheme='blue'
            my={4}
            color={'white'}
            rounded={10}
            fontSize={'sm'}
            px={4}
            w={32}
            gap={2}
            marginLeft={'auto'}
            onClick={onOpen}
        >
            <Plus size={20} />
            Add { title }
        </Button>
    )
}

export default AddButton