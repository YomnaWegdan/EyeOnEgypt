import React from 'react'
import { BsArrowLeftCircle } from 'react-icons/bs'

const ArrowFunc = () => {
    const navigate = useNavigate();

  return (
    <div>
    <div className='mt-2'>
    <BsArrowLeftCircle onClick={() => navigate(-1)}
    style={{width:'40px' , height:'40px'  , color: '#FFE8BD' ,cursor:'pointer', marginLeft:'30px' }}/>
    <span style={{color: 'rgba(100, 79, 10, 0.65)' , fontWeight:'400' , marginInline:'10px'}}>For You</span>
    </div>
    </div>
  )
}

export default ArrowFunc
