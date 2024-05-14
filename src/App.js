import './App.css';
import {  useState } from 'react';

import { BrowserRouter , Routes ,Route, HashRouter } from 'react-router-dom';
import Header from './Components/Header';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Login from './Components/Login';
import CardSlider from './Components/CardSlider';
import ForYouDetails from './Components/ForYouDetails';
import Egyptology from './Components/Egyptology';
import Entertaining from './Components/Entertaining';
import MedicalTourism from './Components/MedicalTourism';
import ReligiousTourism from './Components/ReligiousTourism';
import Favorite from './Components/Favorite';
import About from './Components/About';
import Chat from './Chatbot/Chat';
import Button from './Chatbot/Button';
import MostPopular from './Components/MostPopular';
import Search from './Components/Search';
import TopPlaces from './Components/TopPlaces';
import ForYou from './Components/ForYou';



function App() {
  const [show, setShow] = useState(false)
  const showBtn = () => {
    setShow(!show) 
  }

  return (
    // <BrowserRouter>      

    <BrowserRouter>
      <Header/>
      {show && <Chat/>}
      <Button show={show} showBtn={showBtn}  />
      <Routes>
      <Route path='/login' element={<Login/>} />      
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/' element={<Home/>} />
      <Route path='/cartSlider' element={<CardSlider/>} exact/>
      <Route path='/dataDetails/:id' element={<ForYouDetails/>} />
      <Route path='/mostPopular' element={<MostPopular/>} />
      <Route path='/egyptology' element={<Egyptology/>} />
      <Route path='/entertaining' element={<Entertaining/>} />
      <Route path='/medicalTourism' element={<MedicalTourism/>} />
      <Route path='/religiousTourism' element={<ReligiousTourism/>} />
      <Route path='/topPlaces' element={<TopPlaces/>} />
      <Route path='/forYou' element={<ForYou/>} />
      <Route path='/favorite' element={<Favorite/>} />
      <Route path='/aboutEgypt' element={<About/>} />
      <Route path='/search' element={<Search/>} />

      </Routes>   
  </BrowserRouter>
  );
}
export default App 