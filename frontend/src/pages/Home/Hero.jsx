import { Flex, Image, Button } from '@chakra-ui/react'
import Banner from '../../components/Banner'
import { Link } from 'react-router-dom'
import GreenTransparentButton from '../../components/GreenTransparentButton'

const Hero = () => {
  return (
    <Flex 
      flexDirection={'column'}
      px={52}
      textAlign={'center'}
    >
      <Banner title={"Kenali Proses Pemilu dengan Lebih Dekat"} desc={"SIP (Sistem Informasi Pemilu) adalah aplikasi yang memberikan informasi terkini seputar pemilihan presiden, anggota DPR, dan partai politik di Indonesia. Melalui forum online, kita dapat berdiskusi dan bertukar ide terkait pemilu serta isu-isu politik, memungkinkan peran aktif dalam membentuk masa depan negara."} />
      <Link to='/forum'>
        <GreenTransparentButton title={'Ayo Bergabung di Forum Kami'} />
      </Link>
      <Image src='/assets/home.jpg' width={600} marginX={'auto'} marginBottom={-28} />
    </Flex>
  )
}

export default Hero