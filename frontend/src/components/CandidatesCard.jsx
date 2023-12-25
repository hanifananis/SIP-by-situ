import React, { useEffect, useState } from 'react';
import { Button, Grid, GridItem, Text } from '@chakra-ui/react';
import Candidates from './Candidates';
import { Link } from 'react-router-dom';
import axios from 'axios';
import GreenTransparentButton from './GreenTransparentButton';

const CandidatesCard = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_URL}/paslons`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error Fetching Data: ', error);
      });
  }, []);

  return (
    <Grid
      gap={{base: 8, lg: 4, xl: 8}}
      flexDirection={{ base: 'column' }}
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
    >
      {data.map((val) => (
        <GridItem
          key={val._id} 
          border={1}
          borderColor={'red'}
          bgColor={'white'}
          p={{base: 4, md: 8}}
          align={'center'}
          rounded={'2xl'}
          display={'grid'}
          alignItems={'center'}
          gap={8}
        >
          <Text
            fontWeight={'bold'}
            fontSize={24}
          >
            Calon {val.no_urut}
          </Text>
          <Candidates data={[val]} height={{base: 40, xl: 60}} width={{base: 60, lg: 80, xl: 200}} />
          <Link to={`/calon-2024/${val._id}`}>
            <GreenTransparentButton title={`Lihat Profil Calon ${val.no_urut}`} width={'full'} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
}

export default CandidatesCard;