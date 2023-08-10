import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import image from '../images/EyeOnEgypt.png'

import img from '../images/GuidE.png'
const Footer = () => {
  return (
    <Fragment>
        <div className=" ">
        <footer className="text-center mt-5 " style={{ backgroundColor:'rgba(100, 79, 10, 0.65)'}}>
        <div className="container">
            <section style={{color:'#FFAE0C'}}>
                <div className="row text-center d-flex justify-content-center pt-3 ">

                <div className="col-md-2 mx-4">
                <NavLink to="/" >               
                <img src={image} alt='' style={{width:'140%' , height:'40%' , marginLeft:'-60%', marginTop:'20%'}}/>
                </NavLink>
              
            </div>


                <div className="col-md-2 mx-4">
                <h6 className="text-uppercase font-weight-bold ">
                <NavLink to="/" style={{color:'#FFAE0C'}}>Home</NavLink>
                </h6>
                <h6 className="text-uppercase font-weight-bold">
                <NavLink to="/AboutEgypt" style={{color:'#FFAE0C'}}>AboutEgypt</NavLink>
                </h6>
                <h6 className="text-uppercase font-weight-bold">
                <NavLink to="/Favorite" style={{color:'#FFAE0C'}}>Favorite</NavLink>
                </h6>
            </div>

                <div className="col-md-2 mx-4">
                <h6 className="text-uppercase font-weight-bold">
                <NavLink to="/ForAll" style={{color:'#FFAE0C'}}>ForYou</NavLink>
                </h6>
                <h6 className="text-uppercase font-weight-bold">
                <NavLink to="/TopPlaces" style={{color:'#FFAE0C'}}>TopPlaces</NavLink>
                </h6>
                <h6 className="text-uppercase font-weight-bold">
                <NavLink to="/MostPopular" style={{color:'#FFAE0C'}}>MostPopular</NavLink>
                </h6>
            </div>
            
                    <div className="col-md-2 mx-3">
                        <h6 className="text-uppercase font-weight-bold">
                            <NavLink to="/Egyptology" style={{color:'#FFAE0C'}}>Egyptology</NavLink>
                        </h6>
                        <h6 className="text-uppercase font-weight-bold">
                        <NavLink to="/Entertaining" style={{color:'#FFAE0C'}}>Entertaining</NavLink>
                    </h6>
                    <h6 className="text-uppercase font-weight-bold">
                        <NavLink to="/MedicalTourism" style={{color:'#FFAE0C'}}>MedicalTourism</NavLink>
                        </h6>
                      
                    </div>

                   {/*

                    <div className="col-md-2 mx-3">
                        <h6 className="text-uppercase font-weight-bold">
                        <NavLink to="/MedicalTourism" style={{color:'#FFAE0C'}}>MedicalTourism</NavLink>
                        </h6>
                    </div>
        
                    <div className="col-md-2 mx-5">
                        <h6 className="text-uppercase font-weight-bold">
                        <NavLink to="/ReligiousTourism" style={{color:'#FFAE0C'}}>ReligiousTourism</NavLink>
                        </h6>
                    </div>
  */}
         
         
        </div>
      </section>

      <hr className="" />

      <section >
        <div className="row d-flex justify-content-center" style={{marginTop:'-50px'}}>
          <div className="col-lg-8 ">
            <p style={{color:'#3C2F06'}}>
            Guide is specializes in providing most Egypt places with all information
              about this places . It is as a Tour Guide For you.
            </p>
          </div>
        </div>
      </section>
      
      
    </div>
   
    <div
    className="text-center p-3"
         style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
         >
      © 2023 Copyright:
      
    </div>
    
  </footer>
  </div>
    </Fragment>
  )
}

export default Footer
