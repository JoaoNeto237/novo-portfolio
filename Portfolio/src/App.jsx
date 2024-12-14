import './App.css'
import Contato from './components/Contato'
import Formacao from './components/Formacao'
import Habilidades from './components/Habilidades'
import Header from './components/Header'
import Home from './components/Home'
import Projetos from './components/Projetos'
import Servicos from './components/Servicos'
import Sobre from './components/Sobre'

function App() {

  return (
    <>
    <Header />
    <Home />
    <Sobre />
    <Formacao />
    <Habilidades />
    <Servicos />
    <Projetos />
    <Contato />
    </>
  )
}

export default App
