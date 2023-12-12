import { Text, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'

const BerikanKomentar = () => {
  return (
    <>
        <InputGroup size={'md'} mt={2}>
          <Input
            name="comment"
            placeholder='Berikan Komentar'
            fontSize="sm"
            bg={'whiteAlpha.800'}
            focusBorderColor='#F3EBBD'
            border={0}
            rounded={'xl'}
            type="text"
            autoComplete="off"
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' colorScheme='teal' rounded={'xl'}>
              Reply
            </Button>
          </InputRightElement>
        </InputGroup>
    </>
  )
}

export default BerikanKomentar