import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './Routers/Login.routes';
import Register from './Routers/Register.routes';
import './index.css';
import UserProvider from './components/UserProvider';
import UserAuth from './components/UserAuth';
import Home from './Routers/Home.routes';
import Erro404 from './Routers/Erro404.routes';
import AccountVerify from './Routers/AccountVerify.routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<UserAuth><Home /></UserAuth>} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='*' element={<Erro404 />} />
        </Route>
        <Route path='/verify/:token' element={<AccountVerify />} />

      </Routes>
    </BrowserRouter>
  </UserProvider>

);
