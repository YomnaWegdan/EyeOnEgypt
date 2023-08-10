import React, { useEffect } from 'react';
import { Map , L } from 'leaflet';
const Mapp = () => {
    useEffect(() => {
        // Create a new map instance
        const map = new Map({
          target: 'map-container', // Specify the DOM element ID where the map will be rendered
        });
    
        // Add layers to the map
        map.addLayer(Layers.OSM);
    
        // Set the initial view to Egypt
        map.setView([26.8206, 30.8025], 6); // Coordinates and zoom level can be adjusted as needed
    
        // Clean up the map instance on component unmount
        return () => {
          map.dispose();
        };
      }, []);
    
      return <div id="map-container" style={{ width: '100%', height: '500px' }}></div>;  
};
export default Mapp;
