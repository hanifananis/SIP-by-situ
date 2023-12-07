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

import { Route, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { UserProvider } from './context/UserProvider'
import { PartaiProvider } from './context/PartaiProvider'
import { ToastContainer } from 'react-toastify'

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
import Profile from './pages/Profile';
import ManagePaslon from './pages/Admin/Paslon/ManagePaslon';
import ManageUser from './pages/Admin/User/ManageUser';
import ManageForum from './pages/Admin/Forum/ManageForum';
import ManagePartai from './pages/Admin/Partai/ManagePartai';
import PostDetail from './pages/Forum/PostDetail';
import MainTabs from './pages/Kilas Balik/MainTabs'

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
            <Route path="/forum/:_id" element={<PostDetail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/kilas-balik" element={<MainTabs />} />
            <Route element={<RequireAuth />}>
            </Route>
        </Route> 

        
        <Route path="/" element={<SideBar />}>       
          <Route path="/admin/manage-forum" element={<ManageForum />} />
          <Route path="/admin/manage-user" element={<UserProvider><ManageUser /></UserProvider>} />
          <Route path="/admin/manage-partai" element={<PartaiProvider><ManagePartai /></PartaiProvider>} />
          <Route path="/admin/manage-paslon" element={<ManagePaslon />} />
        </Route> 
      </Routes>
      <ToastContainer />
      <ScrollToTop /> 
    </ChakraProvider>
  )
}

export default App