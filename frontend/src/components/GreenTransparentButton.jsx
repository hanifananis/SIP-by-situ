import { Button } from '@chakra-ui/react'
import React from 'react'

const GreenTransparentButton = ({ title, onClick }) => {
  return (
    <Button
      bgColor={'white'}
      color={'#4F7B58'}
      borderWidth={2}
      borderColor={'#4F7B58'}
      rounded={50}
      fontSize={'sm'}
      px={6}
      _hover={{
        color: 'white',
        bgColor: '#4F7B58'
      }}
      onClick={onClick}
    >
      { title }
    </Button>
  )
}

export default GreenTransparentButton