import { Button } from '@chakra-ui/react'
import React from 'react'

const SubmitButton = () => {
  return (
    <Button
      type="submit"
      colorScheme='blue'
      rounded={'50'}
      mx={'auto'}
      w={1/3}
    >
      Submit
    </Button>
  )
}

export default SubmitButton