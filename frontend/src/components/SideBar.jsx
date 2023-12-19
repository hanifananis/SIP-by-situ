import React from 'react';

import { Chats, Users, SignOut, Bank, UserRectangle } from "@phosphor-icons/react"

import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react';

import {
  FiMenu,
} from 'react-icons/fi';

import { Link, Outlet, useLocation } from 'react-router-dom';

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={'#540302'}
      borderRight="1px"
      borderRightColor={'gray.200'}
      w={{ base: 'full', md: 60 }}
      textColor={'white'}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <img src='/assets/logo-green 1.png' alt='SIP' width={80} />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Link to='/admin/manage-forum'>
        <NavItem>
          <Chats size={32} />
          Manage Forum
        </NavItem>
      </Link>
      <Link to='/admin/manage-user'>
        <NavItem>
          <UserRectangle size={32} />
          Manage User
        </NavItem>
      </Link>
      <Link to='/admin/manage-partai'>
        <NavItem>
          <Bank size={32} />
          Manage Partai
        </NavItem>
      </Link>
      <Link to='/admin/manage-paslon'>
        <NavItem>
          <Users size={32} />
          Manage Paslon
        </NavItem>
      </Link>
      <Link to='/logout'>
        <NavItem>
          <SignOut size={32} />
          Logout
        </NavItem>
      </Link>
    </Box>
  );
};

const NavItem = ({ children, ...rest }) => {
  return (
    <Flex
      align="center"
      p="4"
      mx="4"
      gap={2}
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{
        bg: '#4F7B58',
        color: 'white',
      }}
      {...rest}
    >
      {children}
    </Flex>
  );
};

const MobileNav = ({ onOpen, name, ...rest }) => {
  const location = useLocation();

  const getCurrentText = () => {
    switch (location.pathname) {
      case '/admin/manage-forum':
        return 'Manage Forum';
      case '/admin/manage-user':
        return 'Manage User';
      case '/admin/manage-partai':
        return 'Manage Partai';
      case '/admin/manage-paslon':
        return 'Manage Paslon';
      default:
        return '';
    }
  };

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={'white'}
      borderBottomWidth="1px"
      borderBottomColor={'gray.200'}
      justifyContent={{ base: 'space-between' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

    <Text fontSize={{ base: 'md', md: 'xl'}}>{ getCurrentText() }</Text>
        <Flex alignItems={'center'} gap={2} mr={4}>
            <Avatar
              size={'sm'}
              src={
              'https://api.dicebear.com/avatar.svg'
              }
            />
            <HStack>
                <VStack
                    display={{ base: 'none', md: 'flex' }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                >
                    <Text fontSize="sm">John Doe</Text>
                    <Text fontSize="xs" color="gray.600">
                    Admin
                    </Text>
                </VStack>
            </HStack>
        </Flex>
    </Flex>
  );
};

const SideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={'gray.100'}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} name={name} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        <Outlet />
      </Box>
    </Box>
  );
};

export default SideBar;
