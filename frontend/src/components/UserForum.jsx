import { Avatar, Box, Flex } from '@chakra-ui/react'
import React from 'react'

const UserForum = () => {
  return (
    <Flex spacing='4'>
        <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name='Segun Adebayo' src='https://api.dicebear.com/avatar.svg' size={'sm'} />
        <Box>
            <Text>{props.authorName}</Text>
            <Text color={'#979797'} fontSize={'sm'}>{formattedDate()}</Text>
        </Box>
        </Flex>
    </Flex>
  )
}

export default UserForum