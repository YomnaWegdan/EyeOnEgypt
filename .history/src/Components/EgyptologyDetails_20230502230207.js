import React, { Fragment } from 'react'
import ItemDetails from './ItemDetails'
import {useParams} from 'react-router'
import { Egyptology} from './DATA'
import { useAppContext } from './Context'
const EgyptologyDetails = () => {
  const {Egyptology } = useAppContext();

  const proid = useParams();
        const itemEgyptologyDetail = Egyptology.filter(x=>x.id == proid.id);
        const item3 = itemEgyptologyDetail[0];
  return (
    <Fragment>
    <ItemDetails name={item3.name} data={item3.data} img={item3.img} location={item3.location}/>
    </Fragment>
  )
}
export default EgyptologyDetails