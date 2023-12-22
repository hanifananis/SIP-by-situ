import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Flex, IconButton, Menu, MenuButton, MenuList, MenuItem, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, ModalCloseButton } from '@chakra-ui/react'
import GreenButton from './GreenButton'
import { useAuth } from '../context/AuthContext'
import { UserCircle } from '@phosphor-icons/react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import '../../public/css/index.css'

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (
    <Flex 
      bg='#5D1416' 
      maxW={"100vw"}
      px={{base: 6, md: 24}} 
      color='white' 
      justify={'space-between'} 
      align={'center'}
    >
      <img src='/assets/logo-green 1.png' alt='SIP' width={110} />
      <Flex 
        justify={'space-between'} 
        gap={12}
        display={{base: 'none', lg: 'flex'}}
        align={'center'}
      >
        <NavLink to='/' className={location.pathname === '/' ? 'active' : 'nav'}>
          Home
        </NavLink>
        <NavLink to='/partai-politik' className={location.pathname === '/partai-politik' ? 'active' : 'nav'}>
          Partai
        </NavLink>
        <NavLink to="/forum" className={location.pathname === '/forum' ? 'active' : 'nav'}>
          Forum
        </NavLink>
      </Flex>
        <IconButton
          size={'lg'}
          mr={2}
          icon={<HamburgerIcon />}
          display={{sm: 'flex', md:'flex', lg: 'none', xl: 'none'}}
          onClick={onOpen}
        />
        <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent 
            bg='#5D1416' 
            color='white' 
            pt={8}
          >
          <ModalCloseButton p={6} />
            <DrawerHeader>
              <Link to='/' onClick={onClose}>
                Home
              </Link>
            </DrawerHeader>
            <DrawerHeader>
              <Link to='/partai-politik' onClick={onClose}>
                Partai
              </Link>
            </DrawerHeader>
            <DrawerHeader>
              <Link to="/forum" onClick={onClose}>
                Forum
              </Link>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
        <Flex display={{ base: 'none', lg: 'block' }} color={'blackAlpha.900'}>
        {isLoggedIn ? (
          <Menu>
            <MenuButton 
              px={4}
              py={2}
              transition='all 0.2s'
              rounded={'full'}
              color={'white'}
              _hover={{ 
                bg: '#F3EBBD',
                borderColor: '#D0D5DD',
                color: '#5D1416'
              }}
              _expanded={{ 
                bg: '#F3EBBD',
                borderColor: '#D0D5DD',
                color: '#5D1416'
              }}
            >
              <Flex alignItems={'center'} gap={2}>
                <UserCircle size={32} />
                <ChevronDownIcon />
              </Flex>
            </MenuButton>
            <MenuList>
              <Link to='/profile'>
                <MenuItem>Profile</MenuItem>
              </Link>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Link to='/login'>
            <GreenButton title={'Login'} />
          </Link>
        )}
      </Flex>
    </Flex>
  )
}

export default Navbar