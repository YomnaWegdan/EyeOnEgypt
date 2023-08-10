

import { useState, useEffect, useRef, Fragment } from 'react';
import tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';
import { BsArrowLeftCircleFill, BsSearch } from 'react-icons/bs';
import ttService from '@tomtom-international/web-sdk-services';
import { useNavigate } from 'react-router-dom';

const Maps = () => {
  const [query, setQuery] = useState('');
  const [poiList, setPoiList] = useState([]);
  const mapRef = useRef(null);
  const [currentPosition, setCurrentPosition] = useState(null);
  const [endPoint, setEndPoint] = useState(null);

  
  useEffect(() => {
    const fetchPois = async () => {
      if (query) {
        const response = await fetch(`https://api.tomtom.com/search/2/search/${query}.json?key=ClEFbpGj2vyeGSgzB2bvrHMXLMIty4Gc`);
        const data = await response.json();
        setPoiList(data.results);
      }
    };
    fetchPois();
  }, [query]);

  useEffect(() => {
    const map = tt.map({
      key: 'ClEFbpGj2vyeGSgzB2bvrHMXLMIty4Gc',
      container: mapRef.current,
      center: [26.8206, 30.8025],
      zoom: 5,
    });
  
    poiList.forEach((poi) => {
      if (poi.position && poi.position.lon) { // Check that poi.position exists before destructuring its lon property
        const { lon, lat } = poi.position;
        const marker = new tt.Marker().setLngLat([lon, lat]).addTo(map);
        const popup = new tt.Popup({ offset: 30 }).setHTML(query);
        marker.setPopup(popup);
      }
    });
  
    map.addControl(new tt.FullscreenControl());
    map.addControl(new tt.NavigationControl());
  
    
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrentPosition([longitude, latitude]);

        // Update marker location
      mark.setLngLat([longitude,latitude]).addTo(map);
     const popup = new tt.Popup({ offset: 30 }).setHTML('My Location');
      mark.setPopup(popup);
  

        // Center map on marker
        map.setCenter([longitude, latitude])
      });
    } else {
      console.log('Geolocation is not supported by your browser');
    }
  }, [poiList]);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    ttService.services.poiSearch({
      key: 'ClEFbpGj2vyeGSgzB2bvrHMXLMIty4Gc',
      query: query,
      language: 'en-US',
      limit: 1
    })
      .then((response) => {
        poiList.forEach((poi) => {
       // const poi = response.results[0].p;
       const { lon, lat } = poi.position;
       setEndPoint({ lngLat: { lng: lon, lat: lat }, name: query });
       }) });
  };


  return (
 
    <Fragment>
      <div className="background-map ">
        <div className='mt-3 ' style={{ marginLeft: '10%' }}>
          <BsArrowLeftCircleFill onClick={() => navigate(-1)}
            style={{ width: '40px', height: '40px', color: '#e3cfac', cursor: 'pointer', marginLeft: '' }} />
          <span style={{ color: 'rgba(100, 79, 10, 0.65)', fontWeight: '700', marginInline: '10px' }}>Map</span>
        </div>
        <form onSubmit={handleSubmit} style={{ height: '40px' , borderRadius:'8px' , width:'62%' , margin:'auto' , marginTop:'30px'}}>
        <button type="submit" style={{position:'absolute', marginLeft:'59.5%' , marginTop:'5px' ,width:'30px',color:'gray' , borderRadius:'8px', borderColor:'#fffe' ,background:'#FFF5E3'}}
        >
        <BsSearch />
        </button>
        <input type="text" id="destination-input" value={query} onChange={(e) => setQuery(e.target.value)}
        className="form-control m-auto " placeholder='Search'
      style={{ background: '#FFF5E3',}} />
  
        </form>
  
        <div ref={mapRef} style={{ height: '500px', width: '78%' , marginTop:'40px'  , 
        marginInline: '10%' }} />
        </div>
        </Fragment>
      );
    };
    
    
  
  
  export default Maps;








