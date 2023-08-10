import React, { Fragment } from 'react'
import {useParams} from 'react-router'
import ItemDetails from './ItemDetails'
import { useAppContext } from './Context';

const FavoriteDetails = () => {
    const {favorites } = useAppContext();

    const proid = useParams();
    const itemFavoriteDetails = favorites.filter(x=>x.id == proid.id);
    const item1 = itemFavoriteDetails[0];
    console.log(item1);
  return (
    <Fragment>
    <ItemDetails  name={ item1.name} data={item1.data} img={item1.img} location={item1.location}/>
    
    </Fragment>
  )
}

export default FavoriteDetails
