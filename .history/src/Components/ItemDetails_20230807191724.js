import React, { Fragment, useEffect } from 'react'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import img2 from '../images/location.png'
import './ImagesBackGround.css'

const ItemDetails = ({  name , data , img , location}) => {
  const navigate = useNavigate();

  return (
    <Fragment>
    <div className="background-image">

        <div style={{marginLeft:'10%' , marginTop:'20px' }}>
          <BsArrowLeftCircleFill  onClick={() => navigate(-1)} 
          style={{width:'40px' , height:'40px' , color:'#e3cfac', marginBlock:'2%' ,cursor:'pointer'}}/>
          <span style={{color: 'rgba(100, 79, 10, 0.65)' , fontWeight:'400' , marginInline:'10px'}}>More Places</span>
  
          <div className='loc' style={{position:'absolute', marginTop:'5%'}}>
            <img src={img2} alt='location' width={16} height={20}/>
            <span className='mx-1' style={{color:'#3C2F06'}} >{location}</span>
        </div>
        </div>
        <section>
        
            <div className="left " >            
            <img src={img} alt={name} style={{width:'90%' , height:'400px' }}/>
            </div>
            <div className="right">
              <div className="content">
              <h1 style={{color:'rgb(159 131 81)'}} >{name}</h1>
                <p>{data}</p>
            </div>
          </div>
        </section>
</div>
    
</Fragment>
   


     
  )
}

export default ItemDetails;






