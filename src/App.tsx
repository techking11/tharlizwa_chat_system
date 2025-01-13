// import { useState } from 'react';
import './App.css';
import ThemeProvider from './contexts/ThemeContext';
import MainLayout from './layouts/MainLayout';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
