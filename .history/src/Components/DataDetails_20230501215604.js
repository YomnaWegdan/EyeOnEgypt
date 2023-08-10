import React, { Fragment } from 'react'
import ItemDetails from './ItemDetails'
import {ForYou , TopPlaces, MostPopular,Egyptology,Entertaining, ReligiousTourism, MedicalTourism} from './DATA'
import { useAppContext } from './Context'
import { Navigate } from 'react-router-dom'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
const DataDetails = () => {
    const {name , data} = useAppContext();
  //  const data = ForYou.concat(TopPlaces, MostPopular,Egyptology,Entertaining,ReligiousTourism,MedicalTourism);

    console.log(data)
        const itemDataDetails = data.filter(x=>x.name == name);
        const item1 = itemDataDetails[0];
        console.log(item1);

       
  return (
    <Fragment>
    {item1?(
    <ItemDetails  name={item1.name} data={item1.data} img={item1.img} location={item1.location}/>):
    (
      <div style={{ marginInline:'10%'}}>
      <BsArrowLeftCircleFill  onClick={() => na(-1)} 
      style={{width:'40px' , height:'40px' , color:'#e3cfac', marginBlock:'2%' ,cursor:'pointer'}}/>
      <span style={{color: 'rgba(100, 79, 10, 0.65)' , fontWeight:'400' , marginInline:'10px'}}>More Details</span>
    

      <div style={{textAlign:'center' , marginTop:'16%' , color:'#FFAE0C'
    , border:'2px solid' , padding:'1%', boxShadow:' 8px 6px 8px 6px #888888'}}>
      <h2>Not Found</h2>
      <p style={{color: '#3C2F06'}} >This Place is not found, Place enter new place to can help you. </p>
      
      </div>
    
  </div>  )}</Fragment>
  )
}

export default DataDetails


/*
 
*/
