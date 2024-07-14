import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import CardBicicleta from './components/CardBicicleta'
import FormContato from './components/FormContato'

function App() {

  return (
    <>
      <Header></Header>      

<FormContato></FormContato>

      <CardBicicleta 
        imgSrc='https://www.origamid.com/projetos/bikcraft/img/bicicletas/magic-home.jpg' 
        preco='2499' 
        nomeModelo='Nimbus Stark' />
        
      <CardBicicleta 
        imgSrc='https://www.origamid.com/projetos/bikcraft/img/bicicletas/nimbus-home.jpg'
        preco='4999' 
        nomeModelo='Nebula Cosmic' />
      
      <CardBicicleta 
        imgSrc='https://www.origamid.com/projetos/bikcraft/img/bicicletas/nebula-home.jpg' 
        preco='3999' 
        nomeModelo='Magic Might' />

      <Footer></Footer>      
    </>
  )
}

export default App