import React from 'react';
import ReactDOM from 'react-dom/client'
import { AuthProvider } from '../src/context/AuthContext';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)
