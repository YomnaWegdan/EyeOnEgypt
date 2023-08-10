import React, { Fragment } from 'react'
import ItemDetails from './ItemDetails'
import {useParams} from 'react-router'
import {  Entertaining} from './DATA'
import { useAppContext } from './Context'
const EntertainingDetails = () => {
  const {entertaining } = useAppContext();

    const proid = useParams();
        const itemEntertainingDetail = entertaining.filter(x=>x.id == proid.id);
        const item3 = itemEntertainingDetail[0];
  return (
    <Fragment>
    <ItemDetails name={item3.name} data={item3.data} img={item3.img} location={item3.location}/>
    </Fragment>
  )
}

export default EntertainingDetails
