// import { useState } from 'react';
import './App.css';
import CustomToast from './components/CustomToast/CustomToast';
import EmojiProvider from './contexts/EmojiContext';
import ReplyProvider from './contexts/ReplyContext';
import RightInfoProvider from './contexts/RightInfoContext';
import ThemeProvider from './contexts/ThemeContext';
import Router from './routes/Router';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <ThemeProvider>
      <RightInfoProvider>
        <ReplyProvider>
          <EmojiProvider>
            <CustomToast />
            <Router />
          </EmojiProvider>
        </ReplyProvider>
      </RightInfoProvider>
    </ThemeProvider>
  );
}

export default App;
