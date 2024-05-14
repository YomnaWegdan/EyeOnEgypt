import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Context } from './Context/Context';
import CardItem from "./CardItem";
export default function MostPopular() {
    const navigate = useNavigate();
    const {mostPopular } = useContext(Context);
  return (
    <>
    <div className="container mt-5 pt-5 ">
    <div className='mt-2 d-flex'>
    <i class="fa-solid fa-circle-arrow-left fa-2x light-color" onClick={() => navigate(-1)} ></i>
   
    <h5 className='text-main fw-bold ms-2' >Most Popular</h5>
  </div>  
    <div className="row justify-content-center  mt-0" >   
    {mostPopular.map((el) => {
        return (
        <div className=' col-lg-4 col-md-6 mt-3' key={el.id} >
        <CardItem srcImg={el.img} name={el.name} id={el.id} location={el.location}  link={el.link} title='dataDetails' el={el}/>
        </div> 
        )})}    
    </div></div>
    </>
  )
}
