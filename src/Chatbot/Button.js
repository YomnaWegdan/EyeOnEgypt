import React, { Fragment } from 'react'
import { CloseButton } from 'react-bootstrap'
import { BsBootstrapReboot } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import img from '../images/Ellipse 31.png'


const Button = ({ show, showBtn }) => {  
  return (
    <div className='chatbtn' style={{marginLeft:'93%' , marginTop:'590px' , position:'fixed', zIndex:'2'}}>
      {!show ? (
       
        <img src={img} alt=''  className='transition-3' style={{width:'70%' , height:'70%' , cursor:'pointer'}}
        onClick={() => showBtn()}

        />
      ) : (
       
        <button className='close' onClick={() => showBtn(!show)} style={{  position:'fixed',  cursor:'pointer' , borderRadius:'50%' , width:'65px' , height:'65px'}}>
        <GrClose />
</button>
      )}
    </div>
  )
}

export default Button

