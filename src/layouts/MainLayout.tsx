import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ChatRoom from '../pages/ChatRoom';

const MainLayout: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatRoom />} />
      </Routes>
    </Router>
  );
};

export default MainLayout;
