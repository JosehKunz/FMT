import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Registro = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [mensagem, setMensagem] = useState('');

  const onSubmit = (data) => {
    setMensagem(`Registro efetuado com sucesso! Nome: ${data.nome}, E-mail: ${data.email}`);
  };

  return (
    <div>
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
          <label>Senha:</label>
          <input type="password" {...register('senha', { required: true })} />
          {errors.senha && <p>A senha é obrigatória.</p>}
        </div>
        <button type="submit">Registrar</button>
      </form>

      {mensagem && <p style={{ marginTop: '20px', color: 'green' }}>{mensagem}</p>}
    </div>
  );
};

export default Registro;
