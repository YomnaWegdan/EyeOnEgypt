import React, { Fragment } from 'react'
import ItemDetails from './ItemDetails'
import {ForYou , TopPlaces, MostPopular,Egyptology,Entertaining, ReligiousTourism, MedicalTourism} from './DATA'
import { useAppContext } from './Context'
import { Navigate } from 'react-router-dom'
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
    (<div style={{textAlign:'center' , marginTop:'16%' , color:'#FFAE0C'
    , border:'2px solid' , padding:'1%', boxShadow:' 8px 6px 8px 6px #888888'}}>
      <h2>Not Found</h2>
      <p style={{color: '#3C2F06'}} >This Place is not found place enter new place, </p>
      
      </div>)}
    
    </Fragment>
  )
}

export default DataDetails
