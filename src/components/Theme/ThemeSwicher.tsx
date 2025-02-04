import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:text-gray-100 dark:bg-gray-700"
    >
      Switch to {theme === 'light' ? 'dark' : 'light'} Mode
    </button>
  );
};

export default ThemeSwitcher;
