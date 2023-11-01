import { Flex, Text, Box, Image } from '@chakra-ui/react'
import Banner from '../../components/Banner'

const Hero = () => {
  return (
    <Flex 
        flexDirection={'column'}>
        <Banner title={"Sistem Informasi Pemilu"} />
        <Flex 
          gap={12}
          flexDirection={{base:'column', md:'row'}}
          marginX={{base:20, xl:48}}>
            <Image src='/assets/landing-page.jpg' height={{base:"100%"}} width={{base:"80%", md:"38%", lg:"36%", xl:"26%"}}></Image>
            <Box>
                <Text
                fontWeight={'bold'}
                fontSize={24}>
                Kenali Proses Pemilu dengan Lebih Dekat
                </Text>
                <Text 
                mt={2}
                fontWeight={'medium'}>
                Sebagai mayoritas dari pemilih, peran kita sangat penting dalam menentukan arah masa depan negara. SIP (Sistem Informasi Pemilu) hadir sebagai sebuah aplikasi perangkat lunak yang dirancang untuk memberikan informasi yang lengkap dan terkini terkait dengan pemilihan umum, terutama pemilihan presiden, anggota DPR, dan partai politik di Indonesia.
                </Text>
            </Box>
        </Flex>
    </Flex>
  )
}

export default Hero