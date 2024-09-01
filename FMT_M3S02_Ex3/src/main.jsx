import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from './ThemeContext';
import ToggleTheme from './ToggleTheme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ToggleTheme />
    </ThemeProvider>
  </React.StrictMode>
);
