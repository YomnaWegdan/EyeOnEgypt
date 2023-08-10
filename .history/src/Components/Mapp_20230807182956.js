import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import tt from '@tomtom-international/web-sdk-services';

const Maps = () => {
  const [query, setQuery] = useState('');
  const [poiList, setPoiList] = useState([]);
  const [endPoint, setEndPoint] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(null);
  const mapRef = useRef(null);

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
    const map = mapRef.current;

    poiList.forEach((poi) => {
      if (poi.position && poi.position.lon) {
        const { lon, lat } = poi.position;
        const icon = L.icon({
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        });

        const marker = L.marker([lat, lon], { icon }).addTo(map);
        marker.bindPopup(query);
      }
    });

    const mark = L.marker();
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition([latitude, longitude]);

        mark.setLatLng([latitude, longitude]);
        mark.addTo(map);
        mark.bindPopup('My Location');

        map.panTo([latitude, longitude]);
      });
    } else {
      console.log('Geolocation is not supported by your browser');
    }
  }, [poiList]);

  const handleSubmit = (event) => {
    event.preventDefault();

    tt.services
      .poiSearch({
        key: 'ClEFbpGj2vyeGSgzB2bvrHMXLMIty4Gc',
        query: query,
        language: 'en-US',
        limit: 1,
      })
      .then((response) => {
        const { lon, lat } = response.results[0].position;
        setEndPoint({ lngLat: { lng: lon, lat: lat }, name: query });
      });
  };

  const MapEvents = () => {
    const map = useMap();

    map.on('click', (e) => {
      const { lat, lng } = e.latlng;
      console.log('Clicked at:', lat, lng);
    });

    return null;
  };

  return (
    <div style={{ height: '400px' }}>
      <MapContainer center={[26.8206, 30.8025]} zoom={5} style={{ height: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={endPoint && [endPoint.lngLat.lat, endPoint.lngLat.lng]}>
        </Marker>
        <MapEvents />
      </MapContainer>

      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};