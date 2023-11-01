import { Box, Text, Image } from '@chakra-ui/react'
import Marquee from "react-fast-marquee";

const PartaiCards = () => {
  return (
    <Box
        backgroundColor={'#540302'}
        pt={10}
        pb={16}>
        <Text
            fontWeight={'bold'}
            fontSize={42}
            color={'white'}
            textAlign={'center'}
            mb={8}>
            Partai Politik
        </Text>
        <Marquee
            speed={30}>
            <Image src='/assets/Logo_PKB.png' height={48} style={{ marginRight: '48px' }}></Image>
            <Image src='/assets/Logo_Gerindra.png' height={48} style={{ marginRight: '48px' }}></Image>
            <Image src='/assets/Logo_PDIP.png'height={48} style={{ marginRight: '48px' }}></Image>
            <Image src='/assets/Logo_Golkar.png'height={48} style={{ marginRight: '48px' }}></Image>
            <Image src='/assets/Logo_NasDem.png'height={48} style={{ marginRight: '48px' }}></Image>
            <Image src='/assets/Logo_Buruh.png'height={48} style={{ marginRight: '48px' }}></Image>
            <Image src='/assets/Logo_Gelora.png'height={48} style={{ marginRight: '48px' }}></Image>
            <Image src='/assets/Logo_PKS.svg'height={48} style={{ marginRight: '48px' }}></Image>
            <Image src='/assets/Logo_PKN.png'height={48} style={{ marginRight: '48px' }}></Image>
            <Image src='/assets/Logo_Garuda.png'height={48} style={{ marginRight: '48px' }}></Image>
            <Image src='/assets/Logo_PAN.png'height={48} style={{ marginRight: '48px' }}></Image>
            <Image src='/assets/Logo_PBB.jpg'height={48} style={{ marginRight: '48px' }}></Image>
            <Image src='/assets/Logo_Demokrat.webp'height={48} style={{ marginRight: '48px' }}></Image>
        </Marquee>
    </Box>
  )
}

export default PartaiCards