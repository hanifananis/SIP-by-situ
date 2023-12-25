import { Box, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import GreenTransparentButton from '../../components/GreenTransparentButton';

const PelajariPemilu = () => {
  return (
    <Box
      align={'center'}
      px={{base: 6, md: 24}}
    >
      <Text 
        fontSize={{base: 32, md: 48}}
        fontWeight={'bold'}
        mb={{base: 4, md: 8}}
      >
        Pelajari Pemilu 2024
      </Text>
      <Text
        mb={8}
        fontSize={{base: 'sm', md: 'md'}}
      >
        Sebuah ringkasan cepat untuk meningkatkan pemahaman tentang Pemilu, institusi pemerintahan, dan organisasi politik menjelang Pemilu 2024.
      </Text>
      <Link to={`/pemilu-2024`}>
        <GreenTransparentButton title={'Klik untuk membaca'} />
      </Link>
    </Box>
  )
}

export default PelajariPemilu