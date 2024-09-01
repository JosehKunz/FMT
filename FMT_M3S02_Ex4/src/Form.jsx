import React from 'react';
import { useForm } from 'react-hook-form';
import { useFormContext } from './FormContext';

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { updateFormData } = useFormContext();

  const onSubmit = (data) => {
    updateFormData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nome:</label>
        <input type="text" {...register('nome', { required: true })} />
        {errors.nome && <p>O nome é obrigatório.</p>}
      </div>
      <div>
        <label>E-mail:</label>
        <input type="email" {...register('email', { required: true })} />
        {errors.email && <p>O e-mail é obrigatório.</p>}
      </div>
      <div>
        <label>Idade:</label>
        <input type="number" {...register('idade', { required: true, min: 18 })} />
        {errors.idade && <p>A idade é obrigatória e deve ser maior que 18.</p>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
