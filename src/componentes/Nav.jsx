import {} from 'react'
import {Link} from 'react-router-dom'

function Nav() {

  return (
    <>
     <Link to="Produtos">Produtos</Link>
     <Link to="Exemplo1">Exemplo1</Link>
     <Link to="Home">Home</Link>
    </>
  )
}

export default Nav