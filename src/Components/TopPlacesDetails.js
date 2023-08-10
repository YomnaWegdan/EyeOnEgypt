import React, { Fragment } from 'react'
import ItemDetails from './ItemDetails'
import {useParams} from 'react-router'
import { useAppContext } from './Context'

const TopPlacesDetails = () => {
    const {topPlaces } = useAppContext();

    const proid = useParams();
        const itemTopPlacesDetail = topPlaces.filter(x=>x.id == proid.id);
        const item2 = itemTopPlacesDetail[0];
        console.log(item2);

return (
    <Fragment>
    <ItemDetails name={item2.name} data={item2.data} img={item2.img} location={item2.location}/>
    </Fragment>
)
}


export default TopPlacesDetails