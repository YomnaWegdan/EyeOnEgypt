import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import tt from '@tomtom-international/web-sdk-services';

const Mapp = () => {
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
const map = new refalat.Map({
apiKey: 'ClEFbpGj2vyeGSgzB2bvrHMXLMIty4Gc',
container: mapRef.current,
center: [26.8206, 30.8025],
zoom: 5,
});
poiList.forEach((poi) => {
    if (poi.position && poi.position.lon) { // Check that poi.position exists before destructuring its lon property
      const { lon, lat } = poi.position;
      const marker = new refalat.Marker({
        color: 'red'
      }).setLngLat([lon, lat]).addTo(map);
      const popup = new refalat.Popup({ offset: 30 }).setHTML(query);
      marker.setPopup(popup);
    }
  });
  
  map.addControl(new refalat.FullscreenControl());
  map.addControl(new refalat.NavigationControl());
  
  const mark = new refalat.Marker({
   // color: 'red'
  });
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
    const { latitude, longitude } = position.coords;
    setCurrentPosition([longitude, latitude]);
  
      // Update marker location
    mark.setLngLat([longitude,latitude]).addTo(map);
   const popup = new refalat.Popup({ offset: 30 }).setHTML('My Location');
    mark.setPopup(popup);
  
  
      // Center map on marker
      map.setCenter([longitude, latitude])
    });
  } else {
    console.log('Geolocation is not supported by your browser');
  }
};
export default Mapp;
