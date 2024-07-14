
import '../assets/styles/Header.css'

function Header() {
    return (
        <div className="Header">
        <img src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg" width="136" height="32" alt="Bikcraft"/>
        <ul className="header-menu">
            <li>Biciletas</li>
            <li>Seguros</li>
            <li>Contratos</li>
        </ul>
        </div>
     )
    }

export default Header