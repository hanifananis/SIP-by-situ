import { Box, Text, Image } from '@chakra-ui/react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";

const PartaiCards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/partaiInfos')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error Fetching Data: ', error);
      });
  }, []);

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
        mb={8}
      >
        Partai Politik
      </Text>
      <Marquee
        speed={30}
      >
        {data.map((partai) => (
          <Image 
            key={partai._id}
            src={partai.foto} 
            height={48} 
            style={{ marginRight: '48px' }}
          />
        ))}
      </Marquee>
    </Box>
  )
}

export default PartaiCards