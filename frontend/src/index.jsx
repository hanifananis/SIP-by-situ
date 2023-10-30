import React from 'react'
import ReactDOM from 'react-dom/client'

import '@fontsource/plus-jakarta-sans/200.css'
import '@fontsource/plus-jakarta-sans/300.css'
import '@fontsource/plus-jakarta-sans/400.css'
import '@fontsource/plus-jakarta-sans/500.css'
import '@fontsource/plus-jakarta-sans/600.css'
import '@fontsource/plus-jakarta-sans/700.css'
import '@fontsource/plus-jakarta-sans/800.css'

import { ChakraProvider } from '@chakra-ui/react'

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom"

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import LearnMore from './pages/LearnMore';

import theme from './theme';
import PartaiPolitik from './pages/PartaiPolitik'
import Detail from './components/Partai/Detail'

function Layout() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Outlet />
      <Footer />
    </ChakraProvider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/partai-politik",
        element: <PartaiPolitik />,
      },
      {
        path: "/partai-politik/:id",
        element: <Detail />,
      }, 
      {
        path: "/pemilu-2024",
        element: <LearnMore />,
      }, 
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
