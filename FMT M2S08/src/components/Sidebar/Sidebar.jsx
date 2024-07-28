import { Link } from "react-router-dom"
import './sidebar.css'

function Sidebar() {
    return (
        <> 
            <div className="sidebar">
                <h4>Empresa XYZ</h4>
                <legend>MENU</legend>
                <Link to='/home'>Overview</Link>
                <Link to='/bicicletas'>Bicicletas</Link>
            </div>       
        </>        
    )
}

export default Sidebar