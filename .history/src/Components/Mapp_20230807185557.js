import React, { useState, useEffect, useRef, Fragment } from 'react';
import { MapContainer, TileLayer, Marker, useMap , p } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import tt from '@tomtom-international/web-sdk-services';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeftCircleFill, BsSearch } from 'react-icons/bs';

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
const map = new L.Map({
apiKey: 'ClEFbpGj2vyeGSgzB2bvrHMXLMIty4Gc',
container: mapRef.current,
center: [26.8206, 30.8025],
zoom: 5,
});
poiList.forEach((poi) => {
    if (poi.position && poi.position.lon) { // Check that poi.position exists before destructuring its lon property
      const { lon, lat } = poi.position;
      const marker = new L.Marker({
        color: 'red'
      }).setLngLat([lon, lat]).addTo(map);
      const popup = new L.Popup({ offset: 30 }).setHTML(query);
      marker.setPopup(popup);
    }
  });
  
  map.addControl(new L.FullscreenControl());
  map.addControl(new L.NavigationControl());
  
  const mark = new L.Marker({
   // color: 'red'
  });
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
    const { latitude, longitude } = position.coords;
    setCurrentPosition([longitude, latitude]);
  
      // Update marker location
    mark.setLngLat([longitude,latitude]).addTo(map);
   const popup = new L.Popup({ offset: 30 }).setHTML('My Location');
    mark.setPopup(popup);
  
  
      // Center map on marker
      map.setCenter([longitude, latitude])
    });
  } else {
    console.log('Geolocation is not supported by your browser');
  }}, [poiList]);
  const navigate = useNavigate();
  
  const handleSubmit = (event) => {
  event.preventDefault();
  L.services.poiSearch({
  apiKey: 'ClEFbpGj2vyeGSgzB2bvrHMXLMIty4Gc',
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
    <MapContainer center={currentPosition} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={currentPosition}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>,
    </Fragment>
  );
};
export default Mapp;
