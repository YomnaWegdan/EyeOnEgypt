import React from 'react'
import img from '../images/60495959_605_edited.jpg'
import CardSlider from './CardSlider'
export default function Home() {
    const images=[
        {
          id:1,
          text :'Enjoy',
          img : require('../images/Rectangle 123.png'),
      },
      {
        id:2,
        text : 'New',
        img : require('../images/Rectangle 122.png')
      }, {
        id:3,
        text : 'Places',
        img : require('../images/Rectangle 124.png')
      }] 


  return (
    <div>
        <div className='min-vh-100'>
        <div className='h-75'>
            <img src={img} alt='img' className='w-100 vh-80 object-fit-cover'/>
        </div>

        <div className='d-flex justify-content-center mt-5 '> 
        {images.map((el) => {
            return (
                <div className='mx-2  '  style={{marginTop: el.id *10}}  key={el.id} >
                <img src={el.img} alt='images' className='w-100 rounded-2'/>   
                <p className='text-sec text-center'>{el.text}</p>
                </div>   
    )})}   
    <div>  
        </div></div>

    </div>
    <CardSlider/>
    </div>
  )
}
