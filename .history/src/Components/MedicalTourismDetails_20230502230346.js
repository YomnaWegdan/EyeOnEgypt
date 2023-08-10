import {React ,Fragment} from 'react'
import ItemDetails from './ItemDetails'
import {useParams} from 'react-router'
import { MedicalTourism} from './DATA'
import { useAppContext } from './Context'
const MedicalTourismDetails = () => {
  const {MedicalTourism } = useAppContext();

    const proid = useParams();
    const itemMedicalDetail = MedicalTourism.filter(x=>x.id == proid.id);
    const item3 = itemMedicalDetail[0];
  return (
    <Fragment>
    <ItemDetails name={item3.name} data={item3.data} img={item3.img} location={item3.location}/>
    </Fragment>
  )
}

export default MedicalTourismDetails
