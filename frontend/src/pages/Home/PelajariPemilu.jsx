import { Box, Button, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const PelajariPemilu = () => {
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
        <Link to={`/pemilu-2024`}>
          <Button
            bgColor={'#4F7B58'}
            color={'white'}
            rounded={'3xl'}
            fontSize={'sm'}
            size={'md'}>
              Klik untuk membaca
          </Button>
        </Link>
    </Box>
  )
}

export default PelajariPemilu