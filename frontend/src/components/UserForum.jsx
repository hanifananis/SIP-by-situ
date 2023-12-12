import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const UserForum = ({ authorName, tanggal }) => {
  const formattedDate = () => {
    const date = new Date(tanggal);
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
    <Flex spacing='4'>
        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name='Segun Adebayo' src='https://api.dicebear.com/avatar.svg' size={'sm'} />
        <Box>
            <Text>{authorName}</Text>
            <Text color={'#979797'} fontSize={'sm'}>{formattedDate()}</Text>
        </Box>
        </Flex>
    </Flex>
  )
}

export default UserForum