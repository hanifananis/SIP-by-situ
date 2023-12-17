import { Input } from '@chakra-ui/react'
import React from 'react'

const RedInput = ({val}) => {
  return (
    <Input 
        bgColor={'#540302'}
        _placeholder={{color: 'white'}} 
        placeholder={val} 
        size={'sm'}
        p={6}
        rounded={'xl'}
    />
  )
}

export default RedInput