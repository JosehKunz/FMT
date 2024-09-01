import React, { createContext, useState, useContext } from 'react';

// Cria o contexto para o formulário
const FormContext = createContext();

export const useFormContext = () => {
  return useContext(FormContext);
};

// Cria o FormProvider para fornecer os dados do formulário aos componentes filhos
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  const updateFormData = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};
