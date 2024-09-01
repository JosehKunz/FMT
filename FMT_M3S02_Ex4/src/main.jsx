import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { FormProvider } from './FormContext';
import Form from './Form';
import ExibirDados from './ExibirDados';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormProvider>
      <Form />
      <ExibirDados />
    </FormProvider>
  </React.StrictMode>
);
