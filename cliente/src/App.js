import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './pages/routes';
import GlobalStyle from './pages/styles/global';
import { ToastContainer } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  );
}



export default App;
