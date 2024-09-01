import React from 'react';
import { useFormContext } from './FormContext';

const ExibirDados = () => {
  const { formData } = useFormContext();

  return (
    <div>
      <h3>Dados do Formulário:</h3>
      <p>Nome: {formData.nome}</p>
      <p>E-mail: {formData.email}</p>
      <p>Idade: {formData.idade}</p>
    </div>
  );
};

export default ExibirDados;
