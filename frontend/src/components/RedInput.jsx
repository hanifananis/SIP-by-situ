import { Input } from '@chakra-ui/react'
import React from 'react'

const RedInput = ({isi, val, nameInput, formChange, formBlur }) => {
  return (
    <Input 
      name={nameInput}
      bgColor={'#540302'}
      color={'white'}
      _placeholder={{color: 'white'}} 
      placeholder={isi} 
      size={'sm'}
      p={6}
      rounded={'xl'}
      value={val}
      onChange={formChange}
      onBlur={formBlur}
    />
  )
}

export default RedInput