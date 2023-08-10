import React, { Fragment } from 'react'
import logo from '../images/EyeOnEgypt.png'
import {  NavDropdown } from 'react-bootstrap';
import '../App.css'
import { NavLink } from 'react-router-dom';


// style={{height:'55px' , background:'#644F0A', opacity:'65%' , paddingLeft:'124px' , paddingRight:'124px'}}
const Header = () => {

  return (
<Fragment>
  <nav className="navbar navbar-expand-lg "  style={{  height:'55px'  ,background:'#644F0A', opacity:'65%' , paddingLeft:'10%' , paddingRight:'9%'}}>
    <div className="container-fluid ">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse  " id="navbarSupportedContent" style={{margin:'-3%'}}>

        <NavLink className="navbar-brand fw-bold p-0 pe-4 " to="/">
        <img src={logo} alt='Guide' style={{ marginLeft:'10%' , width:'120px' }} />
        </NavLink>
        <ul className="navbar-nav  p-5   mx-5  mb-lg-0 " style={{alignItems:'end' , marginLeft:'34%'}}>
          <li className="nav-item ">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" to="/AboutEgypt" >About Egypt</NavLink>
          </li>
        {/*  <li className="nav-item ">
          <NavLink className="nav-link" to="/Favorite">Favorites</NavLink>
          </li>
          <NavDropdown title="Catagories" id="basic-nav-dropdown" >
            <NavDropdown.Item href="/Egyptology/">Egyptology</NavDropdown.Item>
            <NavDropdown.Item href="/Entertaining">Entertaining</NavDropdown.Item>
            <NavDropdown.Item href="/MedicalTourism">Medical Tourism</NavDropdown.Item>
            <NavDropdown.Item href="/ReligiousTourism">Religious Tourism</NavDropdown.Item>
          </NavDropdown>
          <li className="nav-item p-0 m-0 " >
            <NavLink className="nav-link " to="/map">Map</NavLink>
          </li> 
        </ul>
     
        <ul className="navbar-nav p-2">
          <li className="nav-item  ">
            <NavLink className="nav-link" to="/login" >Login</NavLink>
          </li>
          <li  className="nav-item ">        
          <NavLink  className="nav-link" to="/signup">Sign Up</NavLink>
          </li>
        </ul>
  
      </div>
    </div>
  </nav>
</Fragment>
  )
}

export default Header

