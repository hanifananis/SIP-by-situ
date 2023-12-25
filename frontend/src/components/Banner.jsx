import { Flex, Text } from '@chakra-ui/react'

const Banner = ({ title, desc }) => {
  return (
    <Flex 
      flexDirection={'column'}
    >
      <Text  
        fontSize={{base: 32, md: 48}} 
        fontWeight={'bold'}
        mb={{base: 6, md: 10}}
        align={'center'}
      >
        { title }
      </Text>
      <Text
        mb={8}
        fontSize={{base: 'sm', md: 'md'}}
        align={'center'}
      >
        { desc }
      </Text>
    </Flex>
  )
}

export default Banner