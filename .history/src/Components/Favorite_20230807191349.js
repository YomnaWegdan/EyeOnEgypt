import React, { Fragment} from 'react'
import { NavLink } from 'react-router-dom';
import '../App'
import img from '../images/location.png'

import {   useAppContext } from './Context';
import {  BsHeartFill, BsArrowLeftCircleFill  } from "react-icons/bs";
import {FaHeartBroken} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const Favorite = () => {

const {favorites  , removeFromFavorite} = useAppContext();  
const navigate = useNavigate();

  console.log(favorites);

  
  const favoriteChecker = (id)=>{
      const boolean = favorites.some((item)=>item.id === id)
      return boolean;
  } 
  return(
    <Fragment>
    <div className='container'>  
    <div className='my-3'>
    <BsArrowLeftCircleFill onClick={() => navigate(-1)}
    style={{width:'40px' , height:'40px'  , color: '#e3cfac' ,cursor:'pointer', marginLeft:'2%' }}/>
    <span style={{color: 'rgba(100, 79, 10, 0.65)' , fontWeight:'700' , marginInline:'10px'}}>My Favorites</span>
    </div>    
    <div className="row justify-content-center  mt-3 .col-4 .col-md-6 .col-sm-12 ">  


    {favorites.length>0? favorites.map((el)=>{
      console.log('el', el);
      return(
          <div className='d-inline-block col-lg-4  col-md-6  col-sm-12'
            key={el.id}  style={{marginTop: '10px' , alignItems:'center'}}  >
            <NavLink to={`/Favorite/${el.id}`}>   
              <img  src={el.img} alt={el.name} style={{width:'390px' , height:'260px'}} />
            </NavLink>
            <div key={el.id}> 
              <span style={{display:'inline-block' , marginLeft:'auto'}}>{el.name}</span>
              {favoriteChecker(el.id)? (
                <span key={el.id} style={{color: '#FF4E02',cursor:'pointer' ,marginRight:'10px', float:'right'}} 
                  onClick={()=>removeFromFavorite(el.id)}> <BsHeartFill/>
                </span>)  :''}
                
                </div>
          <div className='location'>
                <img src={img} alt='location' style={{width:'14px' , height:'18px'}}/>
                <a href={`${el.link}`} style={{color:'#644F0A', textDecoration:'none'}}> <span className='m-1' >{el.location}</span></a></div>


          </div>)})
          : <div style={{textAlign:'center' , marginTop:'16%' , color:'#FFAE0C'
        , border:'2px solid' , padding:'1%', boxShadow:' 8px 6px 8px 6px #888888'}}>
          <FaHeartBroken/>
          <h2>No Favorites Yet</h2>
          <p style={{color:'#B99214'}} > Click the Heart Icon on any place, and You will see it here next time you visit</p>
          
          </div>}

   </div></div></Fragment>)}
  

export default Favorite 




