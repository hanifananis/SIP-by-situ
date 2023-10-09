'use client'

import { Box, Flex, Text, Button } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Flex bg='#5D1416' w='100%' px={24} color='white' justify={'space-between'} align={'center'}>
        <img src='/assets/logo-green 1.png' alt='SIP' width={120} />
        <Flex justify={'space-between'} gap={8}>
            <div>Home</div>
            <div>Partai</div>
            <div>Forum</div>
            <div>Profil</div>
        </Flex>
        <Button 
            bgColor={'#4F7B58'}
            color={'inherit'}
            rounded={50}
            fontSize={'sm'}
            px={6}>
            Login
        </Button>
    </Flex>
  )
}

export default Navbar