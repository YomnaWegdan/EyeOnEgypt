import {createContext  , useContext, useState, useEffect} from "react"
import React  from 'react'
import { Egyptology, Entertaining, ForYou, MedicalTourism, MostPopular, ReligiousTourism, TopPlaces } from "./DATA";
import { EntertainmentPlaces, MostPopularData, ancientSites } from "./RealData";


export const Context = createContext(null);
export const useAppContext = () =>{
    const contextVar = useContext(Context);
    if(contextVar === undefined){
        throw new Error('Context must be within ContextProvider');
    }
    return contextVar;
} 
const ContextProvider = ({children}) =>{

  const [forYou, setForYou] = useState([]);
  const [topPlaces, setTopPlaces] = useState([]);
  const [mostPopular, setMostPopular] = useState([]);
  const [egyptology, setEgyptology] = useState([]);
  const [entertaining, setEntertaining] = useState([]);
  const [religiousTourism, setReligiousTourism] = useState([]);
  const [medicalTourism, setMedicalTourism] = useState([]);




  useEffect(() => {
      setForYou(ForYou);
      setTopPlaces(TopPlaces);
      setMostPopular(MostPopularData);
      setEgyptology(ancientSites);
      setEntertaining(EntertainmentPlaces);
      setMedicalTourism(MedicalTourism);
      setReligiousTourism(is);
   /*   axios.get('https://api.example.com/data')
        .then(response => setForYou(response.data))
        .catch(error => console.log(error));
  */   }, []);

   const [favorites , setFavorites]=useState(JSON.parse(window.localStorage.getItem("fav")||""));
    const [like , setLike] = useState(false);
    const [name , setName] = useState("");
    const [isSubmit, setIsSubmit] = useState(false);

   // const data = ForYou.concat(TopPlaces, MostPopular,Egyptology,Entertaining,ReligiousTourism,MedicalTourism);
   const data = forYou.concat(topPlaces, mostPopular,Egyptology,Entertaining,religiousTourism,medicalTourism);

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
    setName(value);
    setIsSubmit(true);

}

const onSearch =(searchTerm)=>{
  //our api to fetch search result
  setName(searchTerm);
  
}
/* End Search */




/*Start Favorites */
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
  /* End Favorites */


    return(
        <Context.Provider value={{  
          forYou ,topPlaces , mostPopular,egyptology,entertaining,religiousTourism,medicalTourism,    
          favorites  , addToFavorite , removeFromFavorite ,data , name,setName,   
            handleSearchSubmit, handleInputChange, handleSearch, onSearch , isSubmit}}>
        {children}
        </Context.Provider>
    )}
export default ContextProvider;


