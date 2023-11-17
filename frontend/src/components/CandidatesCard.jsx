import React, { useEffect, useState } from 'react';
import { Button, Grid, GridItem, Text } from '@chakra-ui/react';
import Candidates from './Candidates';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CandidatesCard = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:5000/paslons')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error Fetching Data: ', error);
      });
  }, []);


  return (
    <Grid
      gap={8}
      flexDirection={{ base: 'column', md: 'row' }}
      templateColumns={{ base: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }}
    >
      {data.map((val) => (
        <GridItem
          key={val.id} 
          border={1}
          borderColor={'red'}
          bgColor={'white'}
          p={8}
          minW={'md'}
          align={'center'}
          rounded={'2xl'}
        >
          <Text
            fontWeight={'bold'}
            fontSize={24}
            mb={6}
          >
            Calon {val.no_urut}
          </Text>
          <Candidates data={[val]} height={60} width={80} />
          <Link to={`/calon-2024/${val._id}`}> {/* Adjust the route and key as needed */}
            <Button
              mt={4}
              bgColor={'#4F7B58'}
              color={'white'}
              rounded={'3xl'}
              fontSize={'sm'}
              w={'full'}
            >
              Lihat Profil Calon {val.no_urut}
            </Button>
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
}

export default CandidatesCard;