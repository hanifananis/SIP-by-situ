import { Box, Button, Card, Flex, Grid, Text, Image, CardBody } from '@chakra-ui/react'
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
            maxW={'sm'}
            h={72}
            alignItems={'center'}
            textAlign={'center'}
            pb={4}
            px={2}
            // borderColor={'#540302'}
            // borderWidth={2}
            justify={'space-between'}
            boxShadow={'lg'}
            bgColor={'#F3EBBD'}
            >
              <CardBody>
                <Box
                  h={24}
                  display={'grid'}
                  placeItems={'center'}
                >
                <Image
                  mx={'auto'}
                  alignItems={'center'}
                  src={post.foto}
                  maxWidth={40}
                  maxHeight={24}
                >
                  </Image>
                </Box>
                <Text
                  textAlign={'center'}
                  fontSize={'lg'}
                  mt={4}
                  mb={'auto'}
                  noOfLines={2}
                  fontWeight={'bold'}
                >
                  {post.name}
                </Text>
              </CardBody>
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