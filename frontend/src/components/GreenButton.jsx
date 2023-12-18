import { Button } from '@chakra-ui/react'
import React from 'react'

const GreenButton = ({ title, onClick }) => {
  return (
    <Button
      bgColor={'#4F7B58'}
      color={'white'}
      rounded={50}
      fontSize={'sm'}
      px={6}
      _hover={{
        bgColor: 'white',
        color: '#4F7B58'
      }}
      onClick={onClick}
    >
      { title }
    </Button>
  )
}

export default GreenButton