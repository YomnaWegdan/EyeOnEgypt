import {React ,Fragment} from 'react'
import ItemDetails from './ItemDetails'
import {useParams} from 'react-router'
import { ReligiousTourism} from './DATA'
import { useAppContext } from './Context'
const ReligiousTourismDetails = () => {
  const {religiousTourism } = useAppContext();

    const proid = useParams();
    const itemReligionDetail = religiousTourism.filter(x=>x.id == proid.id);
    const item3 = itemReligionDetail[0];
  return (
    <Fragment>
    <ItemDetails name={item3.name} data={item3.data} img={item3.img} location={item3.location}/>
    </Fragment>
  )
}

export default ReligiousTourismDetails
