import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
    

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-link active text-light" aria-current="page" to="/">Home </NavLink>
        <NavLink className="nav-link  text-light" aria-current="page" to="/user1">User1</NavLink>
        <NavLink className="nav-link  text-light" aria-current="page" to="/user2">User2</NavLink>
        
      
      </div>
    </div>
  </div>
</nav>

    </>
  )
}

export default Header