import { Flex, Heading, Accordion, Image } from '@chakra-ui/react'
import GreenAccordion from '../../components/GreenAccordion'
import DetailHeader from '../../components/DetailHeader'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import SocialMedia from '../../components/SocialMedia'
import RedirectPartai from '../../components/RedirectPartai'

const Detail = () => {
  const [data, setData] = useState([]);
  const { _id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/partaiInfos/${_id}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error Fetching Data: ', error);
      });
  }, [_id]);

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
      id: 3,
      title: "Fakta Unik",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

  return (
    <Flex
      flexDirection={'column'}
      marginY={16}
      marginX={{base:20, xl:48}}>
      <RedirectPartai />
      <DetailHeader 
        key={data._id}
        title={data.name}
      />
      <Image
        mx={'auto'}
        alignItems={'center'}
        src={data.foto}
        w={'80'}
      >
      </Image>
      <SocialMedia
        website={data.website}
        instagram={data.ig_sosmed}
        facebook={data.fb_sosmed}
      />
      <Heading
        mt={12}
        mb={2}
        fontSize={48}>
          Profil Partai
      </Heading>
      <Accordion allowMultiple>
        {posts.map(post => (
          <GreenAccordion 
            key={post.id} 
            title={post.title} 
            desc={post.desc} 
          />
        ))}
      </Accordion>
      <Heading
        mt={12}
        mb={2}
        fontSize={48}>
          Calon Legislatif 2019
      </Heading>
    </Flex>
  )
}

export default Detail