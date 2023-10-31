import { Flex, Text } from '@chakra-ui/react'

const Banner = ({ title, desc }) => {
  return (
    <Flex 
        flexDirection={'column'}>
        <Text  
            fontSize={48} 
            fontWeight={'bold'}
            mb={12}
            align={'center'}>
            { title }
        </Text>
        <Text
          mb={8}
          align={'center'}>
          { desc }
        </Text>
    </Flex>
  )
}

export default Banner