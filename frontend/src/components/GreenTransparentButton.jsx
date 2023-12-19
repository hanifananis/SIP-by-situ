import { Button } from '@chakra-ui/react'
import React from 'react'

const GreenTransparentButton = ({ title }) => {
  return (
    <Button
      type="submit"
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
    >
      { title }
    </Button>
  )
}

export default GreenTransparentButton