import React from 'react'

import { Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <Flex 
      flexDir={'column'} 
      minH={'100vh'}
    >
      <Navbar />
      <div style={{ flexGrow: 1 }}>
        <Outlet />
      </div>
      <Footer />
    </Flex>
  )
}

export default Layout