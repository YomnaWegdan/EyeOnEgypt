import {React ,Fragment} from 'react'
import ItemDetails from './ItemDetails'
import {useParams} from 'react-router'
import { useAppContext } from './Context'
const MedicalTourismDetails = () => {
  const {medicalTourism } = useAppContext();

    const proid = useParams();
    const itemMedicalDetail = medicalTourism.filter(x=>x.id == proid.id);
    const item3 = itemMedicalDetail[0];
  return (
    <Fragment>
    <ItemDetails name={item3.name} data={item3.data} img={item3.img} location={item3.location}/>
    </Fragment>
  )
}

export default MedicalTourismDetails
