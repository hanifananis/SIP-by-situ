import { Flex, Text, Image, Heading } from '@chakra-ui/react'

const Candidate = ({ name, position, img, height, width }) => {
  return (
    <Flex 
        flexDirection={'column'}
        align={'center'}>
        <Image src={ img } h={ height } w={ width }></Image>
        <Heading 
          mt={4}
          fontWeight={'medium'}
          fontSize={'base'}
        >
          { name }
        </Heading>
        <Text 
            mt={1}
            fontWeight={'medium'}
            fontSize={'sm'}
          >
            { position }
        </Text>
    </Flex>
  )
}

export default Candidate