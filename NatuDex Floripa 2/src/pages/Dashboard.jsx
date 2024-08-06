import { useState, useEffect } from 'react'

function Dashboard() {
  const [usuarios, setUsuarios] = useState([])
  const [locais, setLocais] = useState([])

  useEffect(() => {
    async function fetchData() {
      const usuariosResponse = await fetch('http://localhost:3000/usuarios')
      const locaisResponse = await fetch('http://localhost:3000/localidades')
      setUsuarios(await usuariosResponse.json())
      setLocais(await locaisResponse.json())
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Usuários Ativos: {usuarios.length}</h2>
        <h2>Locais Cadastrados: {locais.length}</h2>
      </div>
      <div>
        {locais.map(local => (
          <div key={local.id}>
            <h3>{local.nome}</h3>
            <p>{local.descricao}</p>
            <p>{local.localizacao}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
