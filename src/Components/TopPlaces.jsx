import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from './Context/Context';
import CardItem from "./CardItem";
export default function TopPlaces() {
    const navigate = useNavigate();
    const {topPlaces } = useContext(Context);
  return (
    <>
    <div className="container mt-5 pt-5 ">
    <div className='mt-2 d-flex'>
    <i class="fa-solid fa-circle-arrow-left fa-2x light-color" onClick={() => navigate(-1)} ></i>
   
    <h5 className='text-main fw-bold ms-2' >Top Places</h5>
  </div>  
    <div className="row justify-content-center  mt-0" >   
    {topPlaces.map((el) => {
        return (
        <div className=' col-lg-4 col-md-6 mt-3' key={el.id} >
        <CardItem srcImg={el.img} name={el.name} id={el.id} location={el.location}  link={el.link} title='dataDetails' el={el}/>
        </div> 
        )})}    
    </div></div>
    </>
  )
}
