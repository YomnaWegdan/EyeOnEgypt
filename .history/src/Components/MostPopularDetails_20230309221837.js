import React, { Fragment } from 'react'
import ItemDetails from './ItemDetails'
import {useParams} from 'react-router'
import { MostPopular} from './DATA'
const MostPopularDetails = () => {
  const proid = useParams();
        const itemMostPopularDetail = MostPopular.filter(x=>x.id == proid.id);
        const item3 = itemMostPopularDetail[0];
        console.log(item3);

  return (
    <Fragment>
    <ItemDetails name={item3.name} data={item3.data} img={item3.img} location={item3.location}/>
    </Fragment>
  )
}


export default MostPopularDetails