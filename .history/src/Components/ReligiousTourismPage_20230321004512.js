import { ReligiousTourism } from './DATA'
import React, { Fragment } from 'react'
import CardItem from './CardItem'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

const ReligiousTourismPage = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
    <div className='back-img'>
    <div className="container">
    <div className='mt-2'>
    <BsArrowLeftCircleFill  onClick={() => navigate(-1) }
    style={{width:'40px' , height:'40px' , color: '#FFE8BD' ,cursor:'pointer' ,  marginLeft:'30px'}}/>
    <span style={{color: 'rgba(100, 79, 10, 0.65)' , fontWeight:'400' , marginInline:'10px'}}>Religious Tourism</span>
    </div>
    <div className="row justify-content-center  mt-0" >   
    {ReligiousTourism.map((el) => {
        return (
        <div className=' d-inline-block  col col-lg-4 col-md-6 mt-3'key={el.id} >
        <CardItem srcImg={el.img} name={el.name} id={el.id} location={el.location} title='ReligiousTourism' el={el}/>
        </div> 
        )})}    
    </div></div></div>
    </Fragment>
  )
}

export default ReligiousTourismPage
