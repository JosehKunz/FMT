import React from 'react';
import { useTheme } from './ThemeContext';

const ToggleTheme = () => {
  const { tema, alternarTema } = useTheme();

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <button onClick={alternarTema}>
        Mudar para tema {tema === 'light' ? 'escuro' : 'claro'}
      </button>
      <p>O tema atual é: {tema}</p>
    </div>
  );
};

export default ToggleTheme;
