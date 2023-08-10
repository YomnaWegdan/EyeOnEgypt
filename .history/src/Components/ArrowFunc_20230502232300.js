import React, { Fragment } from 'react'
import { BsArrowLeftCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

const ArrowFunc = (title) => {
    const navigate = useNavigate();

  return (
    <Fragment>

    <div className='mt-2' style={{marginLeft:'10%' }} >
        <BsArrowLeftCircleFill  onClick={() => navigate(-1)} 
        style={{width:'40px' , height:'40px' , color:'#e3cfac', marginBlock:'2%' ,cursor:'pointer'}}/>
        <span style={{color: 'rgba(100, 79, 10, 0.65)' , fontWeight:'400' , marginInline:'10px'}}>{title}</span>

</div>

    </Fragment>
)
}

export default ArrowFunc

// color: '#FFE8BD'
