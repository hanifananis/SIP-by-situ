import { Box, Button, Text } from '@chakra-ui/react'

const LearnMore = () => {
  return (
    <Box
        align={'center'}
        marginX={24}>
        <Text 
          fontSize={42} 
          fontWeight={'bold'}
          mb={8}>
          Pelajari Pemilu 2024
        </Text>
        <Text
          mb={8}>
          Sebuah ringkasan cepat untuk meningkatkan pemahaman tentang Pemilu, institusi pemerintahan, dan organisasi politik menjelang Pemilu 2024.
        </Text>
        <Button
          bgColor={'#4F7B58'}
          color={'white'}
          rounded={'3xl'}
          fontSize={'sm'}
          size={'md'}>
            Klik untuk membaca
        </Button>
    </Box>
  )
}

export default LearnMore