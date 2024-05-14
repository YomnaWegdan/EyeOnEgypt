import {createContext  , useState, useEffect} from "react"
import React  from 'react'
import { EntertainmentPlaces, ForYouData, MostPopularData, NatureReserves, TopPlacesData, ancientSites, islamicLandMarks } from "../RealData";

export const Context = createContext();
export default  function ContextProvider ({children}) {

    const [forYou, setForYou] = useState([]);
    const [topPlaces, setTopPlaces] = useState([]);
    const [mostPopular, setMostPopular] = useState([]);
    const [egyptology, setEgyptology] = useState([]);
    const [entertaining, setEntertaining] = useState([]);
    const [religiousTourism, setReligiousTourism] = useState([]);
    const [medicalTourism, setMedicalTourism] = useState([]);
  
 
  
    useEffect(() => {
        setForYou(ForYouData);
        setTopPlaces(TopPlacesData);
        setMostPopular(MostPopularData);
        setEgyptology(ancientSites);
        setEntertaining(EntertainmentPlaces);
        setMedicalTourism(NatureReserves);
        setReligiousTourism(islamicLandMarks);
        }, []);
  
     const [favorites , setFavorites]=useState(JSON.parse(window.localStorage.getItem("fav")||""));
      const [like , setLike] = useState(localStorage.getItem('like'));
      const [name , setName] = useState("");
      const [isSubmit, setIsSubmit] = useState(false);
  
     // const data = ForYou.concat(TopPlaces, MostPopular,Egyptology,Entertaining,ReligiousTourism,MedicalTourism);
     const data =  forYou.concat(topPlaces, mostPopular,egyptology,entertaining,religiousTourism,medicalTourism);
  
    const [selectedItem, setSelectedItem] = useState(null);
  
    
    

    /* Start Search */
  
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
      setName(str);
      setIsSubmit(true);
  }
  
  const onSearch =(searchTerm)=>{
    //our api to fetch search result
    setName(searchTerm);
    
  }
  /* End Search */
  
 
  
  /*Start Favorites */

  useEffect(()=>{
      window.localStorage.setItem("fav", JSON.stringify(favorites));

  },[favorites])
  

  
    const addToFavorite = (item) => {
      //setFavorites([...favorites, item]);
      const oldFavorite = [...favorites];
      const newFavorite = oldFavorite.concat(item)
      setFavorites(newFavorite) 
      setLike(true)
    };
  
    const removeFromFavorite = (id) => {
    
      const newFavorite = favorites.filter((el) => el.id !== id);
      setFavorites(newFavorite);
      setLike(false);
    };
    /* End Favorites */
  
  
      return(
          <Context.Provider value={{  
            forYou ,topPlaces , mostPopular,egyptology,entertaining,religiousTourism,medicalTourism,    
            favorites  , addToFavorite , removeFromFavorite ,data , name,setName,  like , setLike,  
              handleSearchSubmit, handleInputChange, handleSearch, onSearch , isSubmit}}>
          {children}
          </Context.Provider>
      )}
