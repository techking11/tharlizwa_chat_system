// import { useState } from 'react';
import './App.css';
import EmojiProvider from './contexts/EmojiContext';
import ReplyProvider from './contexts/ReplyContext';
import RightInfoProvider from './contexts/RightInfoContext';
import ThemeProvider from './contexts/ThemeContext';
import MainLayout from './layouts/MainLayout';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <ThemeProvider>
      <RightInfoProvider>
        <ReplyProvider>
          <EmojiProvider>
            <MainLayout />
          </EmojiProvider>
        </ReplyProvider>
      </RightInfoProvider>
    </ThemeProvider>
  );
}

export default App;
