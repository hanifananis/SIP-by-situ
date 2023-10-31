import { Container, Flex, Text, Heading, Image, Accordion } from '@chakra-ui/react'
import { ArrowLeft } from "@phosphor-icons/react";
import { useNavigate } from 'react-router-dom';
import GreenAccordion from '../GreenAccordion';

const Detail = () => {
  const navigate = useNavigate();

  const posts = [
    {
      id: 1,
      title: "Deskripsi",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 2,
      title: "Tokoh",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 2,
      title: "Fakta Unik",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

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
          {posts.map(post => (
            <GreenAccordion 
              key={post.id} 
              title={post.title} 
              desc={post.desc} 
            />
          ))}
        </Accordion>
    </Flex>
  )
}

export default Detail