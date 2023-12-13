import { HamburgerIcon } from '@chakra-ui/icons'
import { Flex, Button, Link, IconButton } from '@chakra-ui/react'
import GreenButton from './GreenButton'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  return (
    <Flex 
      bg='#5D1416' 
      maxW={"100vw"}
      px={24} 
      color='white' 
      justify={'space-between'} 
      align={'center'}
    >
      <img src='/assets/logo-green 1.png' alt='SIP' width={120} />
      <Flex 
        justify={'space-between'} 
        gap={8}
        display={{base: 'none', lg: 'flex'}}
      >
        <Link href='/'>
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
          >
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
            }}
          >
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
        <Flex display={{ base: 'none', lg: 'block' }}>
        {isLoggedIn ? (
          <Button
            onClick={logout}
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
          >
            Logout
          </Button>
        ) : (
          <Link href='/login'>
            <GreenButton title={'Login'} />
          </Link>
        )}
      </Flex>
    </Flex>
  )
}

export default Navbar