import React from 'react'

const ArrowFunc = () => {
  return (
    <div>
    <div className='mt-2'>
    <BSArrow onClick={() => navigate(-1)}
    style={{width:'40px' , height:'40px'  , color: '#FFE8BD' ,cursor:'pointer', marginLeft:'30px' }}/>
    <span style={{color: 'rgba(100, 79, 10, 0.65)' , fontWeight:'400' , marginInline:'10px'}}>For You</span>
    </div>
    </div>
  )
}

export default ArrowFunc
