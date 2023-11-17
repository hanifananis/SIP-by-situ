import { Avatar, Box, Card, CardBody, CardHeader, Divider, Flex, Heading, Input, Text } from '@chakra-ui/react'
import { ChatCircle } from "@phosphor-icons/react"
import React from 'react'

const TopicCard = (props) => {
  const formattedDate = () => {
    const date = new Date(props.createdAt);
    return date.toLocaleString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  return (
    <Card  
      bgColor={'white'}
      borderWidth={3}
      borderColor={'#540302'}
      rounded={'2xl'}
      maxW={'md'}
    >
      <CardBody>
        <Flex spacing='4'>
          <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
            <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' size={'sm'} />
            <Box>
              <Text>Segun Adebayo</Text>
              <Text color={'#979797'} fontSize={'sm'}>{formattedDate()}</Text>
            </Box>
          </Flex>
        </Flex>
        <Text fontSize={'lg'} fontWeight={'semibold'} mt={4}>{props.judul}</Text>
        <Text mt={1} mb={4}>{ props.isi }</Text>
        <Divider borderWidth={1} borderColor={'#540302'} />
        <Flex alignItems={'center'} gap={2} mt={2}>
          <ChatCircle />
          <Text>Comment</Text>
        </Flex>
        {/* <Text fontWeight={'medium'} mt={4}>Berikan Komentar</Text>
        <Input 
            mt={2}  
            rounded={'xl'}
            borderWidth={1}
            borderColor={'#540302'}
            focusBorderColor='#540302'
            _placeholder={{ color: '#979797' }}
            placeholder='Komentar yang kritis ya Gan Sis'
         /> */}
      </CardBody>
    </Card>
  )
}

export default TopicCard