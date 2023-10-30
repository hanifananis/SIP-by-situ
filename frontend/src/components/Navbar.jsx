'use client'

import { HamburgerIcon } from '@chakra-ui/icons'
import { Flex, Button, Link, IconButton } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Flex 
      bg='#5D1416' 
      w='100%' 
      px={24} 
      color='white' 
      justify={'space-between'} 
      align={'center'}
      >
        <img src='/assets/logo-green 1.png' alt='SIP' width={120} />
        <Flex 
          justify={'space-between'} 
          gap={8}
          display={{base: 'none', lg: 'flex', xl: 'flex'}}>
          <Link 
            href='/'>
            <Button
              as={"a"}
              bgColor={'#5D1416'}
              color={'inherit'}
              rounded={50}
              _hover={{
                bg: '#F3EBBD',
                borderColor: '#D0D5DD',
                color: '#5D1416'
              }}
              _active={{
                bg: '#F3EBBD',
                borderColor: '#D0D5DD',
                color: '#5D1416'
              }}>
            Home
            </Button>
          </Link>
          <Link href='/partai-politik'>
            <Button
            bgColor={'#5D1416'}
            color={'inherit'}
            rounded={50}
            _hover={{
              bg: '#F3EBBD',
              borderColor: '#D0D5DD',
              color: '#5D1416'
            }}
            _active={{
              bg: '#F3EBBD',
              borderColor: '#D0D5DD',
              color: '#5D1416'
            }}>
            Partai
            </Button>
          </Link>
          <Link href='/forum'>
            <Button
            bgColor={'#5D1416'}
            color={'inherit'}
            rounded={50}
            _hover={{
              bg: '#F3EBBD',
              borderColor: '#D0D5DD',
              color: '#5D1416'
            }}
            _active={{
              bg: '#F3EBBD',
              borderColor: '#D0D5DD',
              color: '#5D1416'
            }}
            _focus={{
              boxShadow:
                '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
            }}>
            Forum
            </Button>
          </Link>
        </Flex>
        <IconButton
          aria-label="Open Menu"
          size={'lg'}
          mr={2}
          icon={<HamburgerIcon />}
          display={{sm: 'flex', md:'flex', lg: 'none', xl: 'none'}}
        />
        <Button
          bgColor={'#4F7B58'}
          color={'inherit'}
          rounded={50}
          fontSize={'sm'}
          px={6}
          display={{base: 'none', lg: 'flex', xl: 'flex'}}>
          Login
        </Button>
    </Flex>
  )
}

export default Navbar