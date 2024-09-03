import React, { useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Import the marker images
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { mapData } from '../utils/data';

// Fix for default marker icon issues in Leaflet with Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function MapClickHandler({ setMarkerPosition }) {
  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      console.log("Latitude: ", lat, "Longitude: ", lng);
      setMarkerPosition(e.latlng);
    },
  });
  return null;
}

const Home = () => {

  const [markerPosition, setMarkerPosition] = useState(null);

  const state = {
    center: [-18.8792, 47.5079],
    zoom: 6,
  };

  return (
    <div className='w-full flex items-center justify-center'>
      <MapContainer
          className="h-[800px] w-[800px]"
          scrollWheelZoom={false}
          center={state.center}
          zoom={state.zoom}
      >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {mapData?.map((lieu)=>{
            return(
              <Marker key={lieu.id} position={[lieu.latitude, lieu.longitude]}>
                <Popup>
                  A pretty CSS3 popup. <br /> id: {lieu.id}
                </Popup>
              </Marker>
            )
          })}

          <MapClickHandler setMarkerPosition={setMarkerPosition} />
          {markerPosition && <Marker position={markerPosition} />}

      </MapContainer>
    </div>
  )
}

export default Home