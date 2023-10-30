import { Container, Flex, Text, Heading, Image, Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel } from '@chakra-ui/react'
import { ArrowLeft } from "@phosphor-icons/react";
import { useNavigate } from 'react-router-dom';

const Detail = () => {
  const navigate = useNavigate();

  return (
    <Flex
      flexDirection={'column'}
      marginY={16}
      marginX={{base:20, xl:48}}>
      <Flex
        alignItems={'center'}
        gap={4}
        fontWeight={'bold'}>
        <button onClick={() => navigate(-1)}><ArrowLeft /></button>
        <Text>Lihat Partai Lainnya</Text>
      </Flex>
      <Container
        centerContent
        maxW='container.sm'>  
        <Heading
          my={8}
          fontSize={48}>Nama Partai
        </Heading>
        <Image src='/assets/bg-auth.png'></Image>
      </Container>
      <Heading
        mt={12}
        mb={2}
        fontSize={48}>
          Profil Partai
      </Heading>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem 
            mt={4} 
            border={'none'}
            bgColor={'#80AF85'}
            rounded={'lg'}
            color={'white'}
            p={2}>
            <h2>
              <AccordionButton
              _hover={{
                bg: 'none'
              }}>
                <Box 
                  as="span" 
                  flex='1' 
                  textAlign='left' 
                  fontWeight={'semibold'} 
                  fontSize={'xl'}>
                  Deskripsi
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem 
            mt={4} 
            border={'none'}
            bgColor={'#80AF85'}
            rounded={'lg'}
            color={'white'}
            p={2}>
            <h2>
              <AccordionButton
              _hover={{
                bg: 'none'
              }}>
                <Box 
                  as="span" 
                  flex='1' 
                  textAlign='left' 
                  fontWeight={'semibold'} 
                  fontSize={'xl'}>
                  Tokoh
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem 
            mt={4} 
            border={'none'}
            bgColor={'#80AF85'}
            rounded={'lg'}
            color={'white'}
            p={2}>
            <h2>
              <AccordionButton
              _hover={{
                bg: 'none'
              }}>
                <Box 
                  as="span" 
                  flex='1' 
                  textAlign='left' 
                  fontWeight={'semibold'} 
                  fontSize={'xl'}>
                  Fakta Unik
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
    </Flex>
  )
}

export default Detail