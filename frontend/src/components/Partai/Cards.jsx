import { Box, Button, Card, Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const Cards = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam maiores id nam sed vitae distinctio aspernatur explicabo debitis, repellat repellendus enim ab quibusdam sunt, consequatur repudiandae nisi eaque commodi ullam.",
      img: "./src/assets/bg-auth.png"
    },
    {
      id: 2,
      title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam maiores id nam sed vitae distinctio aspernatur explicabo debitis, repellat repellendus enim ab quibusdam sunt, consequatur repudiandae nisi eaque commodi ullam.",
      img: "./src/assets/bg-auth.png"
    }
  ];
  return (
    <Flex
      flexDirection={'column'}>
      <Text
        fontWeight={'bold'}
        fontSize={42}
        mb={8}>
        Partai Politik
      </Text>
      <Flex 
        alignItems={'center'}
        gap={8}>
        {posts.map(post => (
          <Card
            key={post.id}
            alignItems={'center'}
            p={6}
            gap={2.5}
            borderColor={'#540302'}
            borderWidth={2}
            minWidth={'17%'}
            >
              <Box
              bg={'black'}
              color={'white'}
              py={12}
              px={14}
              w={'full'}
              textAlign={'center'}>
              {post.img}
              </Box>
              <Text fontSize={'lg'}>Lorem Ipsum</Text>
              <Link to={`/partai-politik/${post.id}`}>
                <Button
                bgColor={'#4F7B58'}
                color={'white'}
                rounded={'3xl'}
                fontSize={'xs'}
                size={'sm'}
                >View here</Button>
              </Link>
          </Card>
        ))}
      </Flex>
    </Flex>
  )
}

export default Cards