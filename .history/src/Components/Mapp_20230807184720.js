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
const response = await fetch(`https://api.tomtom.com/search/2/search/${query}.json?key=ClEFbpGj2vyeGSgzB2bvrHMXLMIty4Gc);
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
  
};
export default Mapp;
