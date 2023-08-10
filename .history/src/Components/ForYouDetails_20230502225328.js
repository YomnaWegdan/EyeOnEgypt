import React, { Fragment } from 'react'
import ItemDetails from './ItemDetails'
import {useParams} from 'react-router'
import {ForYou} from './DATA'
import { useAppContext } from './Context'
const ForYouDetails = () => {
  const {forYou } = useAppContext();

  const proid = useParams();
        const itemForYouDetails = orYou.filter(x=>x.id == proid.id);
        const item1 = itemForYouDetails[0];
        console.log(item1);
  return (
    <Fragment>
    <ItemDetails  name={item1.name} data={item1.data} img={item1.img} location={item1.location}/>
    
    </Fragment>
  )
}


export default ForYouDetails



/*

 const {name , handleSearch } = useAppContext();

  const proid = useParams();
        const itemForYouDetails = ForYou.filter(x=>x.name == name);
        const item1 = itemForYouDetails[0];
        console.log(item1);
  return (
    <Fragment>
    <ItemDetails  name={item1.name} data={item1.data} img={item1.img} location={item1.location}/>
    
    </Fragment>

*/
