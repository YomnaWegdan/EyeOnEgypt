import React, { useContext, useEffect, useState } from 'react'
import { Context } from './Context/Context';
import CardItem from './CardItem';

export default function Search() {
    const {data } = useContext(Context);

    const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter the searchData based on the search query
    const filteredData = data.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(filteredData);
  };

  useEffect(()=>{
    console.log(searchResults)
  }, [searchQuery])
  

  return (
    <div className='container pt-5 mt-5'>
    <div className=' w-75 mx-auto   py-5 shadow d-flex'>
    <input className=' form-control  w-75 mx-auto  bg-light-color position-relative'
     placeholder='Search by Place Name' value={searchQuery}
     onChange={handleSearch}/>
    </div>
<div className="row justify-content-center  mt-0" >   
{searchResults.map((el) => {
    return (
    <div className=' col-lg-4 col-md-6 mt-3' key={el.id} >
    <CardItem srcImg={el.img} name={el.name} id={el.id} location={el.location}  link={el.link} title='dataDetails' el={el}/>
    </div> 
    )})}    
</div>
    </div>
  )
}
