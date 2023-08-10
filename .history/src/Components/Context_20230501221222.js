import {createContext  , useContext, useState, useEffect} from "react"
import React  from 'react'
import { Egyptology, Entertaining, ForYou, MedicalTourism, MostPopular, ReligiousTourism, TopPlaces } from "./DATA";
import { NavLink } from "react-router-dom";


export const Context = createContext(null);
export const useAppContext = () =>{
    const contextVar = useContext(Context);
    if(contextVar === undefined){
        throw new Error('Context must be within ContextProvider');
    }
    return contextVar;
} 
const ContextProvider = ({children}) =>{
   const [favorites , setFavorites]=useState(JSON.parse(window.localStorage.getItem("fav")||""));
    const [like , setLike] = useState(false);
    const [name , setName] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);

    const data = ForYou.concat(TopPlaces, MostPopular,Egyptology,Entertaining,ReligiousTourism,MedicalTourism);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // perform search logic here with searchValue
    // set selectedItem to the result of the search
    setSelectedItem(name);
    setName("");
  };
const handleSearch = (event) => {
    let str = event.target.value;
    let value = str.toLowerCase() || str.charAt(0).toUpperCase() || str.toUpperCase() ;
    console.log(value);  

    setName(value);

    setIsSubmit(true);
}





useEffect(()=>{
    window.localStorage.setItem("fav", JSON.stringify(favorites))
},[favorites])


  const addToFavorite = (item) => {
    //setFavorites([...favorites, item]);
    const oldFavorite = [...favorites];
    const newFavorite = oldFavorite.concat(item)
    setFavorites(newFavorite) 
    setLike(true)
  };

  const removeFromFavorite = (id) => {
  
   const oldFavorite =[...favorites];
   const newFavorite = oldFavorite.filter((el)=> el.id !== id);
   setFavorites(newFavorite);   
    setLike(false)
  };


    return(
        <Context.Provider value={{favorites  , addToFavorite , removeFromFavorite ,data , name,setName, 
            
            handleSearchSubmit, handleInputChange, handleSearch , isSubmit}}>
        {children}
        </Context.Provider>
    )}
export default ContextProvider;


