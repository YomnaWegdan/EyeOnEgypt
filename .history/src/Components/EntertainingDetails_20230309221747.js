import React, { Fragment } from 'react'
import ItemDetails from './ItemDetails'
import {useParams} from 'react-router'
import {  Entertaining} from './DATA'
const EntertainingDetails = () => {
    const proid = useParams();
        const itemEntertainingDetail = Entertaining.filter(x=>x.id == proid.id);
        const item3 = itemEntertainingDetail[0];
  return (
    <Fragment>
    <ItemDetails name={item3.name} data={item3.data} img={item3.img} location={item3.location}/>
    </Fragment>
  )
}

export default EntertainingDetails
