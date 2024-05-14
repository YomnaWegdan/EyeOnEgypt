import React, { Fragment } from 'react'
import logo from '../images/EyeOnEgypt.png'
import '../App.css'
import { Link, NavLink } from 'react-router-dom';


export default function Header() {

  return (
<Fragment>
 <nav
  className="navbar navbar-expand-lg navbar-light bg-main fixed-top"
 >
  <div className="container w-100">
    <Link className="navbar-brand" to="/"><img src={logo} alt='Guide' className='w-75'/></Link>
    <button
    className="navbar-toggler d-lg-none"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapsibleNavId"
      aria-controls="collapsibleNavId"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav ms-auto p-2 mt-lg-0">
        <li className="nav-item">
          <a className="nav-link " href="/" aria-current="page"
            >Home
            <span className="visually-hidden">(current)</span></a>
        </li>
        <li className="nav-item ">
        <NavLink className="nav-link" to="/aboutEgypt" >About Egypt</NavLink>
      </li>
      <li className="nav-item ">
      <NavLink className="nav-link" to="/favorite">Favorites</NavLink>
</li>
      <li className="nav-item dropdown">
        <a
        className="nav-link dropdown-toggle"
          href="/"
          id="dropdownId"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          >Catagories</a
        >
      <div
      className="dropdown-menu"
        aria-labelledby="dropdownId"
      >
        <a className="dropdown-item" href="/egyptology"
          >Egyptology</a
        >
        <a className="dropdown-item" href="/entertaining"
        >Entertaining</a
      >
      <a className="dropdown-item" href="/medicalTourism"
      >Medical Tourism</a
      >
      <a className="dropdown-item" href="/ReligiousTourism"
      >Religious Tourism</a
      >
      </div>
      </li>
      
      <li className="nav-item p-0 m-0 " >
        <NavLink className="nav-link " to="/search">Search</NavLink>
      </li> 
        </ul>

       

     
    </div>
  </div>
 </nav>
 
</Fragment>
  )
}



/*
<ul className="navbar-nav p-2 ms-auto">
<li className="nav-item  ">
  <NavLink className="nav-link" to="/login" >Login</NavLink>
</li>
<li  className="nav-item ">        
<NavLink  className="nav-link" to="/signup">Sign Up</NavLink>
</li>
</ul>
*/
