import { Flex, Text, Image, Heading } from '@chakra-ui/react'

const Candidate = ({ name, position }) => {
  return (
    <Flex 
        flexDirection={'column'}
        align={'center'}>
        <Image src='/assets/person.png' height={"90%"} width={"90%"}></Image>
        <Heading 
            mt={4}
            fontWeight={'medium'}
            fontSize={18}>
            { name }
        </Heading>
        <Text 
            mt={1}
            fontWeight={'medium'}>
            { position }
        </Text>
    </Flex>
  )
}

export default Candidate