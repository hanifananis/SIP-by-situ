import { Box, Card, Flex, Grid, Text, Image, CardBody } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import GreenButton from '../../components/GreenButton';

const Cards = ({ data }) => {
  return (
    <Flex
      flexDirection={'column'}
    >
      <Grid
        justify={'space-between'}
        alignItems={'center'}
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
        gap={8}>
        {data.map(post => (
          <Card
            key={post._id}
            maxW={'sm'}
            h={72}
            alignItems={'center'}
            textAlign={'center'}
            pb={4}
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
              <GreenButton title={'View here'} />
            </Link>
          </Card>
        ))}
      </Grid>
    </Flex>
  )
}

export default Cards