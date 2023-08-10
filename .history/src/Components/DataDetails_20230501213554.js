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
    <ItemDetails  name={item1.name} data={item1.data} img={item1.img} location={item1.location}/>)
    
    </Fragment>
  )
}

export default DataDetails
