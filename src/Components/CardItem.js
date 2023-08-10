import React, {Fragment} from 'react'
import { useState} from 'react';
import { BsHeart, BsHeartFill } from "react-icons/bs";
import {useAppContext } from './Context';
import {NavLink} from 'react-router-dom';
import img from '../images/location.png'


const CardItem = (props) => {
const {   addToFavorite , removeFromFavorite } = useAppContext();
 const [love , setLove] = useState(false);


    return (
        <Fragment>
        <NavLink to={`/${props.title}/${props.id}`}>   
            <img  src={props.srcImg} alt={props.name} style={{width:'390px' , height:'260px'}} /> {/*390  260 */}
        </NavLink>
            <div className='heart'> 
                <span style={{display:'inline-block', marginLeft:'auto'}}>{props.name}</span>
                <span key={props.id} style={{color: '#FF4E02',cursor:'pointer',marginRight:'10px', float:'right'}} onClick={()=>  setLove((prevLike)=> !prevLike)}
            >
               
              { love? <BsHeartFill onClick={()=> removeFromFavorite(props.id) } />:
                (<BsHeart onClick={()=>addToFavorite(props.el)}/>)}
                </span>

         

            <div className='location'>
                <img src={img} alt='location' style={{width:'14px' , height:'18px'}}/>
               <NavLink to={`${props.link}`} style={{color:'#644F0A', textDecoration:'none'}}> <span className='m-1' >{props.location}</span></NavLink></div>
            </div>

            
</Fragment>)} 
export default  CardItem  













