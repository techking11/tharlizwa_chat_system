import React, { useEffect } from 'react';
import TinyLeftNavbar from '../Navbar/TinyLeftNavbar';
import UsersList from '../Navbar/UsersList';
import HomeChat from '../Navbar/HomeChat';
import RightInfo from '../Navbar/RightInfo';
import { useNavigate } from 'react-router';

const Chat: React.FC = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem('currentUser');
  useEffect(() => {
    if (user === null) {
      navigate('/login');
    }
  }, []);
  return (
    <div className="flex flex-row bg-white dark:bg-gray-900 border-t dark:border-none">
      <TinyLeftNavbar />
      <UsersList />
      <HomeChat />
      <RightInfo />
    </div>
  );
};

export default Chat;
