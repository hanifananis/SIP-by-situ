import { Box, Text } from '@chakra-ui/react'
import GreenTransparentButton from '../../components/GreenTransparentButton'
import { Link } from 'react-router-dom'

const Flashback = () => {
  return (
    <Box
      align={'center'}
      marginX={24}>
      <Text 
        fontSize={42} 
        fontWeight={'bold'}
        mb={8}>
        Kilas Balik Pemilu 2019
      </Text>
      <Text
        mb={8}>
        Tahun 2019 adalah sebuah bab yang kini terpahat dalam sejarah. Tak lupa, dalam kilas balik 2019, kita juga akan menjelajahi hasil suara dan pilihan yang dibuat oleh masyarakat pada tahun itu, memahami bagaimana keputusan politik dan tren sosial pada masa itu.
      </Text>
      <Link to={'/kilas-balik'}>
        <GreenTransparentButton title={'Klik untuk membaca'} />
      </Link>
    </Box>
  )
}

export default Flashback