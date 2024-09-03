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

const Profil = () => {

  const [markerPosition, setMarkerPosition] = useState(null);

  const state = {
    center: [-18.8792, 47.5079],
    zoom: 10,
  };

  return (
    <div>
        <div>
            <h1>
                Get in touch
            </h1>
            <div className='flex'>
                <div className='flex-1'>
                    left
                </div>
                <div className='flex-1'>
                    right
                </div>
            </div>
            <div className='w-full flex items-center justify-center mt-12'>
              <MapContainer
                  className="h-[300px] w-full"
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
            <div className='flex mt-12'>
                <div className='flex-1'>
                    <h3 className=' font-semibold'>
                        FAQ
                    </h3>
                    <h1 className='text-4xl font-semibold max-w-[200px]'>
                        Frequently asked questions.
                    </h1>
                </div>
                <div className='flex-1'>
                    <h1 className='text-lg font-medium'>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit :
                    </h1>
                    <p className='text-sm text-gray-400 mb-4'>
                      Lorem ipsum, dolor sit amet consectetur a
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, earum?
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className='bg-gray-800 min-h-[200px] p-2'>
                      accordion
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profil