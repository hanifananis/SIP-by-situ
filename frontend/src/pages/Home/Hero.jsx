import { Flex, Box, Image, Text, Highlight } from '@chakra-ui/react'
import Banner from '../../components/Banner'

const Hero = () => {
  return (
    <Flex 
        flexDirection={'column'}
        mb={4}>
        <Banner title={"Sistem Infomasi Pemilu"} />
        <Flex 
          gap={12}
          flexDirection={{base:'column', md:'row'}}
          marginX={{base:20, xl:48}}>
            <Image src='/assets/landing-page.jpg' height={{base:"100%"}} width={{base:"80%", md:"38%", lg:"36%", xl:"26%"}}></Image>
            <Box>
            <Text fontWeight={'bold'} fontSize={31} lineHeight='tall'>
            <Box bg={'#F3EBBD'} p={4} mb={8}>
            Sebagai mayoritas dari pemilih, peran kita sangat <b style={{ color: '#5D1416' }}>krusial</b> dalam menentukan arah <u>masa depan negara</u>.
            </Box>
              <Highlight
                query={['presiden', 'DPR', 'partai']}
                styles={{ px: '2', py: '1', rounded: 'full', bg: '#80AF85', color:'white' }}
              >
                SIP hadir sebagai wadah informasi lengkap dan terkini untuk pemilu, termasuk pemilihan presiden, anggota DPR, dan partai politik di Indonesia.
              </Highlight>
            </Text>
                {/* <Text
                fontWeight={'bold'}
                fontSize={24}>
                Kenali Proses Pemilu dengan Lebih Dekat
                </Text>
                <Text 
                mt={2}
                fontWeight={'medium'}>
                Sebagai mayoritas dari pemilih, peran kita sangat penting dalam menentukan arah masa depan negara. SIP (Sistem Informasi Pemilu) hadir sebagai sebuah aplikasi perangkat lunak yang dirancang untuk memberikan informasi yang lengkap dan terkini terkait dengan pemilihan umum, terutama pemilihan presiden, anggota DPR, dan partai politik di Indonesia.
                </Text> */}
            </Box>
        </Flex>
    </Flex>
  )
}

export default Hero