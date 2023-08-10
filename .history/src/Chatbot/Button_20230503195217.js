import React, { Fragment } from 'react'
import { CloseButton } from 'react-bootstrap'
import { BsBootstrapReboot } from 'react-icons/bs'
import { GrClose } from 'react-icons/gr'
import img from '../images/'
/*
const Button = ({ show, showBtn }) => {
    const but={
        color:'FFF5E3',
        border:''

    }
  return (
    <div style={{marginLeft:'90%' , marginTop:'-120px' }}>
      {!show ? (
        <button style={{border:'none'}}
          className="btn float   font-extrabold shadow-xl animate-pulse  bg-gradient-to-r from-green-400 to-blue-500 "
          onClick={() => showBtn()}
        >
        <img src={img} alt=''  className='transition-3' style={{width:'65px' , height:'65px'}}/>
        </button>
      ) : (
       {/* <button style={{border:'none'}}
          className="btn float rounded-full p-3 m-3 text-white font-semibold shadow-xl  bg-gradient-to-r from-green-400 to-blue-500"
          onClick={() => showBtn(!show)}
        >
        <GrClose style={{  marginTop:'-236px', marginLeft:'60px' }}/>
      </button>  }
      )}
    </div>
  )

 <button
          className="btn float rounded-full p-3 m-3 text-white font-extrabold shadow-xl animate-pulse  "
          onClick={() => showBtn()}
        >
        <img src={img} alt=''  className='transition-3' style={{width:'65px' , height:'65px' }}/>
        </button>

}*/

const Button = ({ show, showBtn }) => {  //91%
  return (
    <div className='chatbtn' style={{marginLeft:'93%' , marginTop:'590px' , position:'fixed', zIndex:'2'}}>
      {!show ? (
       
        <img src={img} alt=''  className='transition-3' style={{width:'65px' , height:'65px' , cursor:'pointer'}}
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

/*  marginLeft:'12px'  , marginTop: '-3800%'
 <button
          className="btnfloat rounded-full p-3 m-3 text-white font-semibold shadow-xl  bg-gradient-to-r from-green-400 to-blue-500"
          onClick={() => showBtn(!show)}
        >
*/