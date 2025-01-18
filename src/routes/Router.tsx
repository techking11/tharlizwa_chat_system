import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Register from '../pages/Register';
import Login from '../pages/Login';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<MainLayout />} />
        <Route path="signup" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
