import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

function Login() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate();  

    function handleSubmit(e) {
        e.preventDefault()
        if (email === 'admin@admin.com' && senha === 'admin123') {
            // redireciona para a home
            navigate('/home')
            return
        }

        alert('Email e/ou senha incorretos')
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder='Senha' value={senha} onChange={(e) => setSenha(e.target.value)} />
                <button type='submit'>Entrar</button>
            </form>
        </>
    )
}

export default Login