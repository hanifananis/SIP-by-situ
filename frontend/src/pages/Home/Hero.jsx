import { Flex, Image, Button } from '@chakra-ui/react'
import Banner from '../../components/Banner'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <Flex 
      flexDirection={'column'}
      px={52}
      textAlign={'center'}
    >
      <Banner title={"Kenali Proses Pemilu dengan Lebih Dekat"} desc={"SIP (Sistem Informasi Pemilu) adalah aplikasi yang memberikan informasi terkini seputar pemilihan presiden, anggota DPR, dan partai politik di Indonesia. Melalui forum online, kita dapat berdiskusi dan bertukar ide terkait pemilu serta isu-isu politik, memungkinkan peran aktif dalam membentuk masa depan negara."} />
      <Link href='/login'>
        <Button
          bgColor={'white'}
          color={'#4F7B58'}
          borderWidth={2}
          borderColor={'#4F7B58'}
          rounded={50}
          fontSize={'sm'}
          px={6}
          _hover={{
            color: 'white',
            bgColor: '#4F7B58'
          }}
        >
          Ayo Bergabung di Forum Kami
        </Button>
      </Link>
      <Image src='/assets/home.jpg' width={600} marginX={'auto'} marginBottom={-28} />
    </Flex>
  )
}

export default Hero