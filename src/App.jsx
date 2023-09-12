import Nav from "./componentes/Nav"
import Footer from "./componentes/Footer"
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
     <Nav/>
    {/*para ser renderizado de uma rota filhos*/}
    <Outlet/> 
     <Footer/>
    </>
  )
}

export default App
