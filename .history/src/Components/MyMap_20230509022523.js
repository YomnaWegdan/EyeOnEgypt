import { useState, useEffect, useRef, Fragment } from 'react';
  import tt from '@tomtom-international/web-sdk-maps';
  
  //  ClEFbpGj2vyeGSgzB2bvrHMXLMIty4Gc
  const Maps = () => {
      const [query, setQuery] = useState('');
    const [poiList, setPoiList] = useState([]);
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
      const map = tt.map({
        key: 'ClEFbpGj2vyeGSgzB2bvrHMXLMIty4Gc',
        container: mapRef.current,
        center: [26.8206 ,  30.8025],
        zoom: 13,
      });
  
      poiList.forEach((poi) => {
        const marker = new tt.Marker().setLngLat([poi.position.lon, poi.position.lat]).addTo(map);
        const popup = new tt.Popup({ offset: 30 }).setHTML(poi.name);
        marker.setPopup(popup);
      });
    }, [poiList]);
  
    return (
      <Fragment>
        <div ref={mapRef} style={{ height: '500px'  , width:'500px'}} />
        <form onSubmit={(event) => event.preventDefault()}>
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
          <button type="submit">Search</button>
        </form>
      </Fragment>
    );
  };
  
  


export default MyMap;