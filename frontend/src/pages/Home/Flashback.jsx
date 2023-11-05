import { Box, Button, Text } from '@chakra-ui/react'

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

export default Flashback