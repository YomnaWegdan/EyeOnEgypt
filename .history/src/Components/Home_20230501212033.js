import React, { Fragment, useEffect, useState } from 'react'
//import Carousel from 'react-multi-carousel';
//import 'react-multi-carousel/lib/styles.css';
//import background from '../images/Rectangle.png'
import background from '../images/60495959_605_edited.jpg'
import ProductSlider from './ProductSlider';
import { BsSearch } from 'react-icons/bs'
import img1 from '../images/egypt-BraunS-GettyImages-1347450434-rfc.webp'



import Footer from './Footer';
import { NavLink } from 'react-router-dom';
import { useAppContext } from './Context';
import { NavDropdown } from 'react-bootstrap';
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
const paragraph = {
  width:'32%' ,
  height :'108px' ,
  fontWeight: '700px', 
  textAlign:'center',
  fontSize: '36px' , 
  lineHeight: '150%' ,
  marginInline:'20%' ,marginTop:'200px' ,
};
const img ={
  backgroundImage: `url(${background})`,
   color:'#FFE8BD',
  /* height:'417px' , */
  height:'550px',
   marginBottom:'25px',
  backgroundRepeat: 'no-repeat', 
  backgroundSize:'100% 100%' ,
  overflow:'hidden' ,
  borderRadius:'0 0 0% 0% ',
  
}
/*
  <div className="bg-image w-100   "
            style={{backgroundImage: `url(${background})`, color:'#FFE8BD',  height:'417px' , marginBottom:'25px',
                backgroundRepeat: 'no-repeat',  backgroundSize:'100% 100%' , overflow:'hidden' ,position:'relative'
              }} >
        <p className='' style={{width:'500px' , height :'108px' , fontWeight: '700px', textAlign:'center',
                  fontSize: '36px' , lineHeight: '150%' , marginInline:'280px' ,marginTop:'200px' ,position:'absolute'
              }}>
*/
const Home = () => {
  const {name, data , handleSearch, handleInputChange,  onSearch ,isSubmit , handleSearchSubmit} = useAppContext();

  

  
    return (
      <Fragment>
      <div className="bg-image w-100   "
            style={img} >
        <p className='' style={paragraph}>
        <span style={{color: '#3C2F06'}}>Discover</span> a new adventure in Egypt with Us</p>
      </div>
      
      {/*<img src={background} alt='' style={{width:'100%' , height:'417px' , marginBottom:'25px'}} 
    width : '806px' ,/>
  
   <input type="text" className="form-control m-auto w-75" placeholder='Search' 
      onChange={(e=>{setSearch(e.target.value)})} 
      style={{ height: '40px' , background: '#FFF5E3', borderRadius:'8px' }}/>
  */}
     



  <div className='search-container' style={{ height: '40px' , borderRadius:'8px' , width:'62%' , margin:'auto' , marginTop:'60px'}}>
<div className='search-inner'>
      <input type="text" className="form-control m-auto" placeholder='Search'
      style={{ background: '#FFF5E3' }}  value={name}
      onChange={handleSearch}

     />

 {/*
  <NavLink to={`/DataDetails/${name}`} >  

  <button style={{position:'absolute', marginLeft:'59.5%' , marginTop:'-33px' ,width:'30px',color:'gray' , borderRadius:'8px', borderColor:'#fffe' ,background:'#FFF5E3'}}>
      <BsSearch />
      </button>
      </NavLink>
*/}
{/* {isSubmit&& data.filter(x=>x.name == name) ? 
  (<NavLink to={`/DataDetails/${name}`} >  
  <button onClick={()=>onSearch(name)}
  style={{position:'absolute', marginLeft:'59.5%' , marginTop:'-33px' ,width:'30px',color:'gray' , borderRadius:'8px', borderColor:'#fffe' ,background:'#FFF5E3'}}>
  <BsSearch />
  </button>
  </NavLink>)
      :(<NavLink to={'/'} >  

      <button style={{position:'absolute', marginLeft:'59.5%' , marginTop:'-33px' ,width:'30px',color:'gray' , borderRadius:'8px', borderColor:'#fffe' ,background:'#FFF5E3'}}>
          <BsSearch />
          </button>
</NavLink>)}   */}
<button onClick={()=>h}
style={{position:'absolute', marginLeft:'59.5%' , marginTop:'-33px' ,width:'30px',color:'gray' , borderRadius:'8px', borderColor:'#fffe' ,background:'#FFF5E3'}}>
<BsSearch />
</button>
          </div>
   {/*       <div className='dropdown'>{data.filter((item)=>{
            const searchTerm = name.toLowerCase();
            const fullName = item.name.toLowerCase();
            return searchTerm && fullName.startsWith(searchTerm)
          }).map((item)=>(
            <div onClick={()=> onSearch(item.name)} className='dropdown-row'>
          {item.name}
          </div>))}
          </div>
      </div>
          */}

          <NavDropdown  >
          {data.filter((item)=>{
            const searchTerm = name.toLowerCase();
            const fullName = item.name.toLowerCase();
            return searchTerm && fullName.startsWith(searchTerm)
          }).map((item)=>(
            <div onClick={()=> onSearch(item.name)} className='dropdown-row'>
            <NavDropdown.Item >{item.name}</NavDropdown.Item>

          </div>))}
          </NavDropdown>
          </div>

      <div className='text-center mt-4 '>

      {images.map((el) => {
        return (
            <div className='midImages d-inline-block ' style={{ marginTop: el.id* 12 , marginInline:'10px'}}  key={el.id} >
            <img src={el.img} alt='images'/>   
            <p  style={{color:'#FF4E02' , fontSize:'24px', fontWeight:'700'}}>{el.text}</p>
            </div>   
)})}    
  
      </div>  
        

  {/*  <div style={{marginInline:'10%' , color:'#644F0A' , width:'80%',marginTop:'30px' , textAlign:'center'}}>
      <h1 style={{color:'rgb(255, 78, 2)'}}>Egypt</h1>
      <h3>
      The mighty Nile and magnificent monuments entice many to Egypt while the beguiling desert and lush delta wow visitors. Add in the country's long and lingering past and culture full of stories, it is a travelers dream.
      </h3> 
      <h5 style={{color:'#FFAE0C'}}> Pyramids & More</h5>
        </div> */}
      <div style={{marginInline:'10%' , marginTop:'40px' }}>
        <div className='imag' style={{width:'52%' , height:'300px', marginTop:'120px' , marginRight:'3%' , display:'inline-block'}}>
          <h2 style={{color:'#FFAE0C', textAlign:'center'}}>Egypt</h2>
          <h5 style={{color:'#3C2F06'}}>
          The mighty Nile and magnificent monuments entice many to Egypt while the beguiling desert and lush delta wow visitors. Add in the country's long and lingering past and culture full of stories, it is a travelers dream.
        </h5> 
        <p style={{color:'#FFAE0C', textAlign:'center'}}> Pyramids & More</p>

        </div>
        <img src={img1} alt='' style={{width:'44%' , height:'420px', marginTop:'-80px', position:'relative', borderRadius:'30% 6% 30% 6%' }}/>

</div>


   {/* <Nav.Link href="/Chat">  <Button  show={show} showBtn={showBtn} /> </Nav.Link> */}



     

      <ProductSlider/>   
      <Footer/>  

      </Fragment>

      );
  
}

export default Home

/*
font-weight: 700;
font-size: 24px;color: #FF4E02;
 <img src={img1} alt='' style ={{marginRight:'20px', display:'inline-block' }}/> 

        <img src={img3} alt='' style={{  marginRight:'20px' , marginTop:'25px', display:'inline-block'}}/>
        <img src={img2} alt='' style={{  marginTop:'50px', display:'inline-block'}}/>


         <div style={{display:'inline-block' , marginRight:'20px'}}>
        <img src={img1} alt='' style ={{}}/> 
        <div>Enjoy</div> 
        </div>  
*/
