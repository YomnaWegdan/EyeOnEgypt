import React, { Fragment} from 'react'
import { NavLink } from 'react-router-dom';
import '../App'
import img from '../images/location.png'

import {   useAppContext } from './Context';
import { useState} from 'react';
import {  BsHeartFill, BsArrowLeftCircleFill  } from "react-icons/bs";
import {FaHeartBroken} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const Favorite = ({}) => {

 


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
    style={{width:'40px' , height:'40px'  , color: '#FFE8BD' ,cursor:'pointer', marginLeft:'2%' }}/>
    <span style={{color: 'rgba(100, 79, 10, 0.65)' , fontWeight:'700' , marginInline:'10px'}}>My Favorites</span>
    </div>    
    <div className="row justify-content-center  mt-3 .col-4 .col-md-6 .col-sm-12 ">  


    {favorites.length>0? favorites.map((el)=>{
      console.log('el', el);
      return(
          <div className='d-inline-block col-lg-4  col-md-6  col-sm-12'
            key={el.id}  style={{marginTop: '10px' , alignItems:'center'}}  >
        {/* <CardItem srcImg={el.img} id={el.id} name={el.name} title={el.title} el = {el}/>   */}
            <NavLink to={`/Favorite/${el.id}`}>   
              <img  src={el.img} alt={el.name} style={{width:'390px' , height:'260px'}} />
            </NavLink>
            <div key={el.id}> 
              <span style={{display:'inline-block', marginRight:'330px'}}>{el.name}</span>
              {favoriteChecker(el.id)? (
                <span key={el.id} style={{color: '#FF4E02',cursor:'pointer'}} 
                  onClick={()=>removeFromFavorite(el.id)}> <BsHeartFill/>
                </span>)  :''}
                
               
          </div>
          <div className='location'>
                <img src={img} alt='location' style={{width:'14px' , height:'18px'}}/>
                <span className='m-1'>{el.location}</span></div>

         
          </div>)})
          : <div style={{textAlign:'center' , marginTop:'16%' , color:'#FFAE0C'
        , border:'2px solid' , padding:'1%', boxShadow:' 8px 6px 8px 6px #888888'}}>
           <FaHeartBroken/>
          <h2>No Favorites Yet</h2>
          <p style={{color: '#3C2F06'}} > Click the Heart Icon on any place, and You will see it here next time you visit</p>
          
          </div>}

   </div></div></Fragment>)}
  

export default Favorite 



/*
{favorites.length>0? favorites.map((el)=>{
  console.log('el', el);
  return(
      <div className='d-inline-block col-lg-4  col-md-6  col-sm-12'
        key={el.id}  style={{marginTop: '10px' , alignItems:'center'}}  >
    {/* <CardItem srcImg={el.img} id={el.id} name={el.name} title={el.title} el = {el}/>   }
    <NavLink to={`/Favorite/${el.id}`}>   
    <img  src={el.img} alt={el.name} style={{width:'390px' , height:'260px'}} />
  </NavLink>
 <div key={el.id}> 
 <span style={{display:'inline-block', marginRight:'330px'}}>{el.name}</span>
      {favoriteChecker(el.id)? (
      <span key={el.id} style={{color: '#FF4E02',cursor:'pointer'}}  onClick={removeFromFavorite(el.id)}
       > <BsHeartFill/>
      </span>)  :( <span key={el.id} style={{color: '#FF4E02',cursor:'pointer'}}  onClick={addToFavorite(el)}
      > <BsHeartFill/></span> )}
      </div></div>)})
      : <h1>No Favorite</h1>}



      { favorites.map((el)=>{
      console.log('el', el);
      return(
          <div className='d-inline-block col-lg-4  col-md-6  col-sm-12'
            key={el.id}  style={{marginTop: '10px' , alignItems:'center'}}  >
        {/* <CardItem srcImg={el.img} id={el.id} name={el.name} title={el.title} el = {el}/>   
        <NavLink to={`/Favorite/${el.id}`}>   
        <img  src={el.img} alt={el.name} style={{width:'390px' , height:'260px'}} />
      </NavLink>
     <div key={el.id}> 
     <span style={{display:'inline-block', marginRight:'330px'}}>{el.name}</span>
          {favoriteChecker(el.id)? (
          <span key={el.id} style={{color: '#FF4E02',cursor:'pointer'}}  
           > <BsHeartFill/>
          </span>)  :"" }
          </div></div>)})
         }


   </div></div></Fragment>)}
  


      {favorites.map((el)=>{
      console.log('el', el);
      return(
          <div className='d-inline-block col-lg-4  col-md-6  col-sm-12'
            key={el.id}  style={{marginTop: '10px' , alignItems:'center'}}  >
        {/* <CardItem srcImg={el.img} id={el.id} name={el.name} title={el.title} el = {el}/> 
        
        <NavLink to={`/Favorite/${el.id}`}>   
        <img  src={el.img} alt={el.name} style={{width:'390px' , height:'260px'}} />
      </NavLink>
     <div key={el.id}> 
          <span style={{display:'inline-block', marginRight:'330px'}}>{el.name}</span>
          {favoriteChecker(el.id)? (
          <span key={el.id} style={{color: '#FF4E02',cursor:'pointer'}} 
           > <BsHeartFill/>
           </span>)  : ''}
           </div>  
     </div>
     )})} </div></div></Fragment>)}








<span style={{display:'inline-block', marginRight:'330px'}}>{el.name}</span>
          {favoriteChecker(el.id)? (
          <span key={el.id} style={{color: '#FF4E02',cursor:'pointer'}} 
           > <BsHeartFill/>
          </span>)  : ''}



{favorites.map((el)=>{
  console.log('el', el);
  return(
      <div className='d-inline-block col-lg-4  col-md-6  col-sm-12'
        key={el.id}  style={{marginTop: '10px' , alignItems:'center'}}  >
    {/* <CardItem srcImg={el.img} id={el.id} name={el.name} title={el.title} el = {el}/>   
    {/*
    <NavLink to={`/${el.title}/${el.id}`}>   
    <img  src={el.img} alt={el.name} style={{width:'390px' , height:'260px'}} />
  </NavLink>
 <div key={el.id}> 
      <span style={{display:'inline-block', marginRight:'330px'}}>{el.name}</span>
      {favoriteChecker(el.id)? (
      <span key={el.id} style={{color: '#FF4E02',cursor:'pointer'}} 
       > <BsHeartFill/>
      </span>)  : ''}
      </div>  
</div>
)})}

      */      

/*onClick={()=> removeFromFavorite(el.id) }

<NavLink to={`/${el.id}`}>   
          <img  src={el.img} alt={el.name} style={{width:'390px' , height:'260px'}} />
      </NavLink>
          <div> 
              <span style={{display:'inline-block', marginRight:'330px'}}>{el.name}</span>
          </div>



favorites.length > 0 ?
/* const [fav , setFav]=useState([]);
  setFav(
   // [ ...ForYou , ...TopPlaces , ...MostPopular]);
  )
  const addToFavorite = id => {
    ForYou.find(item => item.id === id);
    MostPopular.find(item => item.id === id);
    TopPlaces.find(item => item.id === id);
}

  const deleteFromFavorite = id => {
    ForYou.filter(item => item.id !== id);
    TopPlaces.filter(item => item.id !== id);
    MostPopular.filter(item => item.id !== id);

  };
  
 

<div className="container">
    <p className='par '>Favorite</p>
    <div className="row justify-content-center  mt-3 .col-4 .col-md-6 .col-sm-12" >   
    {Fav.map((el) =>{
      return(
      <div className='item d-inline-block 'key={el.id}>
      <CardItem addFav={() => addToFavorite()} deleteFav={()=> deleteFromFavorite() } id={el.id}/>
      </div> )}    )}
      </div></div>







 const [favorites, setFavorites] = useState([ForYou , MostPopular ,TopPlaces]);
/*
  useEffect(() => {
    setFavorites( ForYou ,TopPlaces,MostPopular);
  }, []);
*/
  
 /* const handleFavorite = id => {
    const newFavorites = favorites.map(item => {
      return item.id === id ? { ...item, favorite: !item.favorite } : item;
    });
    setFavorites(newFavorites);
  }
  const addToFavorite = id => {
    if (!favorites.includes(id)) setFavorites(favorites.concat(id));
    console.log(id);
  };

// this one does the exact opposite, it removes the favorite recipe id's
  const removeFavorite = id => {
    let index = favorites.indexOf(id);
    console.log(index);
    let temp = [...favorites.slice(0, index), ...favorites.slice(index + 1)];
    setFavorites(temp);
  };

  return (
    <Fragment>
    <div className='container'>  
      <p className='par '>Favorite</p>
    <div className="row justify-content-center  mt-3 .col-4 .col-md-6 .col-sm-12"> 

        {favorites.map(item =>
         // item.favorite === true ? <li key={item.id}> {item.name}</li> : null
          <CardItem addFav={()=> addToFavorite(item.id)} id={item.id} name={item.name} srcImg={item.img} 
        delete={()=> removeFavorite(item)}/>
        )}
        
   </div></div>
    </Fragment>
  ) 
}
export default Favorite 




 
 
 */
