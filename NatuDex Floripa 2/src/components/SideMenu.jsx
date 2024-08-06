import { Link } from 'react-router-dom'

function SideMenu() {
  return (
    <div className="side-menu">
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/natudex-form">Cadastrar Área</Link></li>
        <li><Link to="/natudex-list">Listar Áreas</Link></li>
      </ul>
    </div>
  )
}

export default SideMenu
