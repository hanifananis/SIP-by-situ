import { Box, Button, Card, Flex, Grid, Text, Image } from '@chakra-ui/react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/partaiInfos')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error Fetching Data: ', error);
      });
  }, [])

  return (
    <Flex
      flexDirection={'column'}>
      <Text
        fontWeight={'bold'}
        fontSize={42}
        mb={8}>
        Partai Politik
      </Text>
      <Grid
        justify={'space-between'}
        alignItems={'center'}
        templateColumns={'repeat(4, 1fr)'}
        gap={8}>
        {data.map(post => (
          <Card
            key={post.id}
            alignItems={'center'}
            p={6}
            gap={2.5}
            borderColor={'#540302'}
            borderWidth={2}
            minWidth={'17%'}
            minHeight={72}
            >
              <Image
              w={'full'}
              textAlign={'center'}
              src={post.foto}
              maxWidth={24}
              maxHeight={28}>
              </Image>
              <Text
              textAlign={'center'}>
                {post.name}
              </Text>
              <Link to={`/partai-politik/${post._id}`}>
                <Button
                bgColor={'#4F7B58'}
                color={'white'}
                rounded={'3xl'}
                fontSize={'sm'}
                w={'44'}
                >
                  View here
                </Button>
              </Link>
          </Card>
        ))}
      </Grid>
    </Flex>
  )
}

export default Cards