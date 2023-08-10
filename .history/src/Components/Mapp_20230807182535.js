import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvent } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Mapp = () => {
  const [query, setQuery] = useState('');
  const [poiList, setPoiList] = useState([]);
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

  const MapEvents = () => {
    const map = useMapEvent('locationfound', (e) => {
      const { lat, lng } = e.latlng;
      setCurrentPosition([lat, lng]);
      map.setView(e.latlng, map.getZoom());
    });

    return null;
  };
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
    <div style={{ height: '400px' }}>
      <MapContainer center={[26.8206, 30.8025]} zoom={5} style={{ height: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {poiList.map((poi) => {
          if (poi.position && poi.position.lon) {
            const { lon, lat } = poi.position;
            const icon = L.icon({
              iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png',
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            });

            return (
              <Marker key={poi.id} position={[lat, lon]} icon={icon}>
                <Popup>{query}</Popup>
              </Marker>
            );
          }
        })}

        {currentPosition && (
          <Marker position={currentPosition}>
            <Popup>My Location</Popup>
          </Marker>
        )}

        <MapEvents />
      </MapContainer>

      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Mapp;
