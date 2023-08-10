import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
const Mapp = () => {
    const [mapCoords, setMapCoords] = React.useState([51.505, -0.09]);
  return (
    <div>
    <MapContainer center={mapCoords} zoom={13} style={{ height: '400px' }}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Marker position={mapCoords} />
  </MapContainer>
    </div>
  )
}

export default Mapp
