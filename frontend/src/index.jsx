import React, { useEffect } from 'react';
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
  useLocation
} from "react-router-dom"

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import LandingPage from './pages/LandingPage';
import LearnMore from './pages/LearnMore';

import theme from './theme';
import PartaiPolitik from './pages/PartaiPolitik'
import Detail from './pages/Partai/Detail'
import Calon from './pages/Calon';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the pathname changes
  }, [pathname]);

  return null; // This component doesn't render anything
}

const data = [
  {
    id: 1,
    title: "Calon 1",
    capres_name: "Anies",
    cawapres_name: "Nanda"
  },
  {
    id: 2,
    title: "Calon 2",
    capres_name: "Rafa",
    cawapres_name: "Karis"
  },
  {
    id: 3,
    title: "Calon 3",
    capres_name: "Ganjar",
    cawapres_name: "Prabowo"
  }
];

function Layout() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTop /> 
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
        element: <LandingPage data={data} />,
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
      {
        path: "/calon-2024/:id",
        element: <Calon />,
      },
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
