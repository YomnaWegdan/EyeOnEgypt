import React, { Fragment } from 'react'
import Carousel from 'react-elastic-carousel'
import CardItem from './CardItem'
import '../App.css'
import { NavLink } from 'react-router-dom'
import { useAppContext  } from './Context';


export var val ={} ;
const breakPoints =[
    {width:1 , itemsToShow : 1},
    {width:550 , itemsToShow : 2},
    {width:768 , itemsToShow : 2},
    {width:1200 , itemsToShow : 3},
]
const par={
    marginLeft:'10%',
}
const link = {
    marginRight:'10%' ,
    color:'#644F0A'
}


const ProductSlider = () => {
   

    const {forYou, topPlaces ,mostPopular } = useAppContext();


return ( 
    <Fragment>
    <div style={{marginTop:'60px'}}>
  {/*  <p className='par d-inline-block ' style={par}>For You</p>
    <NavLink  className='float-end mt-3 fw-bold' style={link} to={`/ForAll/`}>See All</NavLink>
    <div className='rowCarousel m-0' style={{marginBottom:'50px'}} >
    <Carousel className='carousel' breakPoints={breakPoints}  pagination ={false} >
    {forYou.map((el) => {

        return (
            <div className='item align-content-center' key={el.id} >
            { <CardItem srcImg={el.img} name={el.name} id={el.id} location={el.location}  link={el.link} title='ForYou' el ={el} /> }
            </div>
        ) })} 
    </Carousel>
    </div></div>

    <p className='par d-inline-block mt-5' style={par}>Top Places</p>
    <NavLink className='float-end mt-5 fw-bold ' style={link} to={`/TopPlaces/`}>See All</NavLink>

    <div className='rowCarousel m-0'  >
    <Carousel className='carousel' breakPoints={breakPoints}  pagination ={false} >
    {topPlaces.map((el) => {
        return (
            <div className='item' key={el.id}  >
            <CardItem srcImg={el.img} name={el.name} id={el.id} location={el.location}  link={el.link} title='TopPlaces' el ={el} />  
            </div> 
    )})}    
    </Carousel>
    </div>
    <div className="container">
    <p className='mostPop mt-4'>most popular</p>
<div className="row justify-content-center  mt-2 " >   
{mostPopular.map((el) => {
    return el.id < 7  ? (
        <div className=' d-inline-block col-lg-4  col-md-6  col-sm-12'
        key={el.id}  style={{ marginTop: el.id * 12 , alignItems:'center'}}  >
    <CardItem srcImg={el.img} name={el.name} id={el.id} location={el.location} title='MostPopular'  link={el.link}  el ={el}/>  
    </div>) :''} 
)}    
    </div>
    <NavLink className='d-flex justify-content-center mb-5 fw-bold ' style={{ color: '#644F0A'}} to={`/MostPopular/`}>See All</NavLink>
    </div>


    </Fragment>
)
}
export default ProductSlider





    



