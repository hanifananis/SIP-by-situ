import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Flex, Button, IconButton, Menu, MenuButton, MenuList, MenuItem, MenuDivider } from '@chakra-ui/react'
import GreenButton from './GreenButton'
import { useAuth } from '../context/AuthContext'
import { UserCircle } from '@phosphor-icons/react'
import { NavLink, useLocation } from 'react-router-dom'
import '../../public/css/index.css'

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const location = useLocation();
  
  return (
    <Flex 
      bg='#5D1416' 
      maxW={"100vw"}
      px={24} 
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
          aria-label="Open Menu"
          size={'lg'}
          mr={2}
          icon={<HamburgerIcon />}
          display={{sm: 'flex', md:'flex', lg: 'none', xl: 'none'}}
        />
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
              <MenuItem as='a' href='/profile'>Profile</MenuItem>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <NavLink to='/login'>
            <GreenButton title={'Login'} />
          </NavLink>
        )}
      </Flex>
    </Flex>
  )
}

export default Navbar