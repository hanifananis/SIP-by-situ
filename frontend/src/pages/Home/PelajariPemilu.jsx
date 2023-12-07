import { Box, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import GreenTransparentButton from '../../components/GreenTransparentButton';

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
          <GreenTransparentButton title={'Klik untuk membaca'} />
        </Link>
    </Box>
  )
}

export default PelajariPemilu