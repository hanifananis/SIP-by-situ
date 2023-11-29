import React from 'react'

import '@fontsource/plus-jakarta-sans/200.css'
import '@fontsource/plus-jakarta-sans/300.css'
import '@fontsource/plus-jakarta-sans/400.css'
import '@fontsource/plus-jakarta-sans/500.css'
import '@fontsource/plus-jakarta-sans/600.css'
import '@fontsource/plus-jakarta-sans/700.css'
import '@fontsource/plus-jakarta-sans/800.css'

import axios from 'axios';

import theme from '../src/theme'

import { Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { UserProvider } from './context/UserProvider'
import { ToastContainer } from 'react-toastify';

import Login from './pages/Login';
import Register from './pages/Register';
import LandingPage from './pages/LandingPage';
import PartaiPolitik from './pages/Partai/PartaiPolitik';
import Detail from './pages/Partai/Detail';
import Calon from './pages/Calon';
import MainPage from './pages/Forum/MainPage';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import SideBar from './components/SideBar';
import PelajariDetail from './pages/PelajariDetail';
import RequireAuth from './components/RequireAuth';
import ManageForum from './pages/Admin/ManageForum';
import ManagePartai from './pages/Admin/ManagePartai';
import ManagePaslon from './pages/Admin/Paslon/ManagePaslon';
import Profile from './pages/Profile';
import ManageUser from './pages/Admin/User/ManageUser'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/partai-politik" element={<PartaiPolitik />} />
            <Route path="/partai-politik/:_id" element={<Detail />} />
            <Route path="/pemilu-2024" element={<PelajariDetail />} />
            <Route path="/calon-2024/:_id" element={<Calon />} />
            <Route path="/forum" element={<MainPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route element={<RequireAuth />}>
            </Route>
        </Route> 

        
        <Route path="/" element={<SideBar />}>       
          <Route path="/admin/manage-forum" element={<ManageForum />} />
          <Route path="/admin/manage-user" element={<UserProvider><ManageUser /></UserProvider>} />
          <Route path="/admin/manage-partai" element={<ManagePartai />} />
          <Route path="/admin/manage-paslon" element={<ManagePaslon />} />
        </Route> 
      </Routes>
      <ToastContainer />
      <ScrollToTop /> 
    </ChakraProvider>
  )
}

export default App