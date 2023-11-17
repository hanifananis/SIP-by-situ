import React from 'react'

import { Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <Flex display={'grid'} >
      <Navbar />
      <Outlet />
      <Footer />
    </Flex>
  )
}

export default Layout