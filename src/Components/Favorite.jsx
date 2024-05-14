import React, { useContext } from 'react'
import { Context } from './Context/Context';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Favorite() {
    const {favorites  , removeFromFavorite} = useContext(Context);  
const navigate = useNavigate();

  console.log(favorites);

  
  const favoriteChecker = (id)=>{
      const boolean = favorites.some((item)=>item.id === id)
      return boolean;
  } 
  return (
    <>
    <div className='container pt-5 mt-5'>  
    <div className='mt-2 d-flex'>
        <i class="fa-solid fa-circle-arrow-left fa-2x light-color cursor-pointer" onClick={() => navigate(-1)} ></i>
        <h5 className='text-main fw-bold ms-2' >Favorites</h5>
    </div>   
    <div className="row justify-content-center align-items-center ">  


    {favorites.length>0? favorites.map((el)=>{
      console.log('el', el);
      return(
        <div className=' col-lg-4 col-md-6 mt-3' key={el.id} >
        
            <NavLink to={`/dataDetails/${el.id}`}>  
            <img  src={el.img} alt={el.name} className='w-100 object-fit-cover rounded-2' height={280} /> 
             </NavLink>
            <div className='heart d-flex justify-content-between'>               
            <span >{el.name}</span>
              {favoriteChecker(el.id)? (
                <span key={el.id} className='text-sec cursor-pointer' 
                  onClick={()=>removeFromFavorite(el.id)}> <i className=' fa-solid fa-heart'></i>
                </span>)  :''}
                
                </div>
                <div className='location  '>
        <i className="fa-solid fa-location-dot text-sec"></i>                 
           <NavLink to={`${el.link}`} className=' text-decoration-none text-main' > <span className='m-1' >{el.location}</span></NavLink></div>
        </div>
         )})
          :
          <div className='d-flex justify-content-center align-items-center mt-5 '>
          <div className=' shadow border rounded-2 w-100 text-center text-sec p-5' >
          <i class="fa-solid fa-heart-crack"></i>          <h2>No Favorites Yet</h2>
          <p  > Click the Heart Icon on any place, and You will see it here next time you visit</p>
          </div> 
          </div>}

   </div></div></>)}
