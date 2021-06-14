import React, { useContext, useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import {
  MapContainer,
  TileLayer,
  LayersControl,
  Marker,
  useMap
} from 'react-leaflet';
import L from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import * as data from './activities.json'
import './App.css';
import marker from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// import localforage from 'localforage';
// import 'leaflet-offline';

const myIcon = L.icon({
  iconUrl: marker,
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowUrl: markerShadow,
  shadowSize: [68, 95],
  shadowAnchor: [22, 94]
});


const Offline = () => {
  const map = useMap();
  console.log(map);
  return null;
}

function App() {

  return (
    <MapContainer
      center={[55,-128]}
      zoom={5}
      style={{height: '100%'}}
    >
      <Offline/>
      <LayersControl position='topright'>
        <LayersControl.BaseLayer checked name="Regular Layer">
          <TileLayer
            url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
          />
        </LayersControl.BaseLayer>
        <LayersControl.Overlay checked name="Activities">
          <MarkerClusterGroup chunkedLoading>
            {(data as any).rows.map((row:any,index:any) => {
                const geom = row.point_of_interest_payload
                  .geometry[0].geometry.coordinates;
                return (<Marker
                  key={index}
                  position={[geom[1],geom[0]]}
                  icon={myIcon}
                ></Marker>);
              }
            )}
          </MarkerClusterGroup>
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
}

export default App;