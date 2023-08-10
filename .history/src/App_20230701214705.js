import './App.css';
import {  useState } from 'react';



import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import ProductSlider from './Components/ProductSlider';
import ForYouDetails from './Components/ForYouDetails';
import MostPopularDetails from './Components/MostPopularDetails';
import TopPlacesDetails from './Components/TopPlacesDetails';
import ForYouSeeAll from './Components/ForYouSeeAll';
import TopPlacesSeeAll from './Components/TopPlacesSeeAll';
import MostPopularSeeAll from './Components/MostPopularSeeAll';
import EgyptologyPage from './Components/EgyptologyPage';
import EntertainingPage from './Components/EntertainingPage';
import MedicalTourismPage from './Components/MedicalTourismPage';
import ReligiousTourismPage from './Components/ReligiousTourismPage';
import EgyptologyDetails from './Components/EgyptologyDetails';
import EntertainingDetails from './Components/EntertainingDetails';
import MedicalTourismDetails from './Components/MedicalTourismDetails';
import ReligiousTourismDetails from './Components/ReligiousTourismDetails';
import FavoriteDetails from './Components/FavoriteDetails';
import Favorite from './Components/Favorite';
import Maps from './Components/Maps';
import Chat from './Chatbot/Chat';
import Button from './Chatbot/Button';
import AboutEgypt from './Components/AboutEgypt';
import Footer from './Components/Footer';
import DataDetails from './Components/DataDetails';




function App() {
  const [show, setShow] = useState(false)
  const showBtn = () => {
    setShow(!show)
   
    
  }
  return (
    <BrowserRouter>      

      <Header/>

    {  {show && <Chat  />}
      <Button show={show} showBtn={showBtn}  />

  */}
      <Routes>
      <Route path='/login' element={<Login/>} />      
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/' element={<Home/>} />
      <Route path='/AboutEgypt' element={<AboutEgypt/>}  />
      <Route path='/map' element={<Maps/>}  />


      <Route path='/productSlider' element={<ProductSlider/>} exact/>

      <Route path='/ForYou/:id' element={<ForYouDetails/>} />
      <Route path='/ForYou/:name' element={<ForYouDetails/>} />
      <Route path='/DataDetails/:name' element={<DataDetails/>} />


      <Route path='/TopPlaces/:id' element={<TopPlacesDetails/>} exact/>
      <Route path='/MostPopular/:id' element={<MostPopularDetails/>} exact/>

      <Route path='/ForAll/' element={<ForYouSeeAll/>}/>
      <Route path='/TopPlaces/' element={<TopPlacesSeeAll/>}/>
      <Route path='/MostPopular/' element={<MostPopularSeeAll/>}/>

      <Route path='/Egyptology/' element={<EgyptologyPage/>}/>
      <Route path='/Entertaining/' element={<EntertainingPage/>}/>
      <Route path='/MedicalTourism/' element={<MedicalTourismPage/>}/>
      <Route path='/ReligiousTourism/' element={<ReligiousTourismPage/>}/>

      <Route path='/Egyptology/:id' element={<EgyptologyDetails/>} exact/>
      <Route path='/Entertaining/:id' element={<EntertainingDetails/>} exact/>
      <Route path='/MedicalTourism/:id' element={<MedicalTourismDetails/>} exact/>
      <Route path='/ReligiousTourism/:id' element={<ReligiousTourismDetails/>} exact/>
      <Route path='/Favorite/:id' element={<FavoriteDetails/>} exact/>


      <Route path='/Favorite'  element={<Favorite  />} exact/>
     

      </Routes>   
      </BrowserRouter>

  );
}
export default App 