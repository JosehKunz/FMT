import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

function Login() {
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const email = event.target.email.value
    const senha = event.target.senha.value

    if (!email || !senha) {
      setError('Email e Senha são obrigatórios.')
      return
    }

    try {
      const response = await fetch(`http://localhost:3000/usuarios?email=${email}&senha=${senha}`)
      const data = await response.json()

      if (data.length > 0) {
        localStorage.setItem('autenticado', 'true')
        localStorage.setItem('userId', data[0].id)
        navigate('/dashboard')
      } else {
        setError('Email ou senha inválidos.')
      }
    } catch (error) {
      setError('Erro ao tentar realizar login. Tente novamente.')
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" type="email" name="email" />
        <input placeholder="Senha" type="password" name="senha" />
        <button type="submit">Logar</button>
      </form>
      {error && <p>{error}</p>}
      <Link to="/form">
        <button type="button">Cadastrar</button>
      </Link>
    </div>
  )
}

export default Login
