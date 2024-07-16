import './App.css'
import { Contador } from './components/Contador'

import Footer from './components/Footer'
import { Form } from './components/Form'
import Header from './components/Header'
import { InputControlado } from './components/InputControlado'
import { ListaState } from './components/ListaState'
import { Noticia } from './components/Noticia'


function App() {

  return (
    <>
      <Header></Header>      
      <Contador></Contador>
      <Noticia></Noticia>
      <ListaState></ListaState>
      <Form></Form>
      <InputControlado></InputControlado>
      <Footer></Footer>      
    </>
  )
}

export default App