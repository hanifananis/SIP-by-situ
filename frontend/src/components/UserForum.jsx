import { Avatar, Box, Flex, Skeleton, SkeletonCircle, SkeletonText, Text } from '@chakra-ui/react'
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
        {authorName ? (
          <Avatar name='Segun Adebayo' src='https://api.dicebear.com/avatar.svg' size={'sm'} />
        ) : (
          <SkeletonCircle startColor='whiteAlpha.800' endColor='whiteAlpha.200' size='10' />
        )}
        <Box>
          {authorName ? (
            <>
              <Text>{authorName}</Text>
              <Text color={'#979797'} fontSize={'sm'}>{formattedDate()}</Text>
            </>
          ) : (
            <Skeleton startColor='whiteAlpha.800' endColor='whiteAlpha.200' py={2}>
              <Text>{authorName}</Text>
              <Text color={'#979797'} fontSize={'sm'}>{formattedDate()}</Text>
            </Skeleton>
          )}
        </Box>
      </Flex>
    </Flex>
  )
}

export default UserForum