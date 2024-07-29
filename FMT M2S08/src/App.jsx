import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import RoutesComponent from './routes/Routes'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  const isAuthenticated = true
  {/* Estrutura de tela quando está autenticado */}
  
  return (
    <>
      <Router>
        {isAuthenticated ? 
        (
          
          <div className='grid-container'>

            <RoutesComponent />
          </div>
        ) 
        : (
          <RoutesComponent />
        )}
      </Router>  
    </>
  )
}
export default App