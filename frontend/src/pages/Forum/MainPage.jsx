import { Flex, Grid, GridItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner'
import TopicCard from '../../components/TopicCard'
import { useEffect, useState } from 'react'
import axios from 'axios';
import AddTopikModal from './AddTopikModal';

const MainPage = () => {
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

  // Check if data.comments is defined before mapping over it
  const comments = data.comments || [];

  return (
    <Flex
      flexDirection={'column'}
      marginY={16}
      marginX={{base:20, xl:48}}
      gap={6}
    >
      <Banner title={"Forum"} desc={"Kami dengan bangga mempersembahkan wadah ini sebagai tempat bertemunya pikiran-pikiran brilian dan pandangan yang beragam."} />
      <Flex justify={'end'}>
        <AddTopikModal />
      </Flex>
      <Grid
        gap={8}
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
      >
        {data.map((val) => (
          <GridItem key={val._id}>
            <Link to={`/forum/${val._id}`}>
              <TopicCard
                judul={val.judul} 
                isi={val.isi} 
                createdAt={val.createdAt} 
                authorName={val.penulis.name}  
                total={comments.length}
              />
            </Link>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  )
}

export default MainPage