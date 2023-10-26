import { Flex, Text, Box, Image } from '@chakra-ui/react'

const Banner = () => {
  return (
    <Flex 
        flexDirection={'column'}>
        <Text  
            fontSize={48} 
            fontWeight={'bold'}
            mb={12}
            align={'center'}>
            Partai Politik Indonesia
        </Text>
        <Text
          mb={8}
          align={'center'}>
          Menyelidiki catatan prestasi dan sejarah partai politik yang berpengaruh merupakan langkah yang penting bagi pemilih yang ingin membuat keputusan yang berdasarkan informasi yang mendalam dalam konteks pemilihan politik.
        </Text>
    </Flex>
  )
}

export default Banner