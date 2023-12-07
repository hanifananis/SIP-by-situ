import { Button, Flex, Grid, Link } from '@chakra-ui/react'
import Banner from '../../components/Banner'
import TopicCard from '../../components/TopicCard'
import { useEffect, useState } from 'react'
import axios from 'axios';

const PostDetail = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:5000/forums')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error Fetching Data: ', error);
      });
  }, []);

  return (
    <Flex
      flexDirection={'column'}
      marginY={16}
      marginX={{base:20, xl:48}}
      gap={6}
    >
      <Banner title={"Forum"} desc={"Kami dengan bangga mempersembahkan wadah ini sebagai tempat bertemunya pikiran-pikiran brilian dan pandangan yang beragam."} />
      <Button
        mt={4}
        bgColor={'#4F7B58'}
        color={'white'}
        rounded={'3xl'}
        fontSize={'sm'}
        w={52}
        marginLeft={'auto'}
      >
        Tambah Topik Baru
      </Button>
      <Grid
        gap={8}
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
      >
        {data.map((val) => (
          <Link to={`/forum/${val._id}`} style={{ textDecoration: 'none'}}>
            <TopicCard 
              judul={val.judul} 
              isi={val.isi} 
              createdAt={val.createdAt} 
              authorName={val.penulis.name}  
            />
          </Link>
        ))}
      </Grid>
    </Flex>
  )
}

export default PostDetail