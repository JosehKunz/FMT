import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signin.css';

function Signin({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'admin@admin.com' && password === 'admin123') {
      setIsAuthenticated(true); // Atualiza o estado de autenticação
      navigate('/home'); // Redireciona para a página inicial
    } else {
      alert('E-mail ou senha incorretos');
    }
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="E-mail" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Senha" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Signin;
