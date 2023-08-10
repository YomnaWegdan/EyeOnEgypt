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
               <NavLink to={`${props.link}`}> <span className='m-1 text-decoration-none' color=''#644F0A'>{props.location}</span></NavLink></div>
            </div>

            
</Fragment>)} 
export default  CardItem  


/*
<span style={{display:'inline-block', marginRight:'84%'}}>{props.name}</span>
                <span key={props.id} style={{color: '#FF4E02',cursor:'pointer', float:'right'}} onClick={()=>  setLove((prevLike)=> !prevLike)}
            >



 <div className='heart'> 
                <span style={{display:'inline-block', marginRight:'84%'}}>{props.name}</span>
                
                <span key={props.id} style={{color: '#FF4E02',cursor:'pointer'}} 
                onClick={()=>  setLike((prevLike)=> !prevLike ) || addToFavorite(props.el)}>
                {like ? <BsHeartFill  onClick={()=> removeFromFavorite(props.el)} />  : <BsHeart
             />}
    </span>  

            <div className='location'>
                <img src={img} alt='location' style={{width:'14px' , height:'18px'}}/>
                <span className='m-1'>{props.location}</span></div>
            </div>



 <Fragment>
        <NavLink to={`/${props.title}/${props.id}`}>   
            <img  src={props.srcImg} alt={props.name} style={{width:'390px' , height:'260px'}} />
        </NavLink>
            <div className='heart'> 
                <span style={{display:'inline-block', marginRight:'84%'}}>{props.name}</span>
                
                <span key={props.id} style={{color: '#FF4E02',cursor:'pointer'}} 
                onClick={()=>  setLike((prevLike)=> !prevLike ) || addToFavorite(props.el)}>
                {like ? <BsHeartFill  onClick={()=> removeFromFavorite(props.el)} />  : <BsHeart
             />}
    </span>  
        
            <div className='location'>
                <img src={img} alt='location' style={{width:'14px' , height:'18px'}}/>
                <span className='m-1'>{props.location}</span></div>
            </div>



      


     
            
</Fragment>)} 










 return (
    <Fragment>
    <NavLink to={`/${props.title}/${props.id}`}>   
        <img  src={props.srcImg} alt={props.name} style={{width:'390px' , height:'260px'}} />
    </NavLink>
        <div> 
            <span style={{display:'inline-block', marginRight:'330px'}}>{props.name}</span>
            <span key={props.id} style={{color: '#FF4E02',cursor:'pointer'}} 
            onClick={()=> addToFavorite(props.el) || setLike((prevLike)=> !prevLike )}>
            {like? <BsHeartFill/>  : <BsHeart/> }
            </span>
        </div>
    </Fragment>)}



onClick={()=> addToFavorite(props.el) 
<span style={{color: '#FF4E02',cursor:'pointer'}} onClick={()=> setLike((prevLike)=> !prevLike)}>
            {like ? <BsHeartFill onClick={props.addFav}/> : 
            <BsHeart onClick={props.deleteFav}/> }



<span key={props.id} style={{color: '#FF4E02',cursor:'pointer'}} 
            onClick={()=> addToFavorite(props.el)||setLike((prevLike)=> !prevLike )}>
            {like? <BsHeartFill/> : <BsHeart/> }
            </span>  



onClick={() =>  props.delete(props.id)}



 return (
    <Fragment>
    <NavLink to={`/productSlider/${props.id}`}>   
        <img src={props.srcImg} alt={props.name} style={{width:'325px'}} />
        </NavLink>
        <div> 
            <span style={{display:'inline-block', marginRight:'240px'}}>{props.name}</span>
            <BsHeart style={{color:'orange'  ,   cursor:'pointer'}} />
        </div>
    </Fragment>)
*/

