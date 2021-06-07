import React from 'react';
import 'leaflet/dist/leaflet.css';
import {
  MapContainer,
  TileLayer,
  LayersControl,
  Marker
} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
// const data = require('./bridges.json')
import * as data from './bridges.json'
import './App.css';

console.log(data);

function App() {
  return (
    <MapContainer
      center={[55,-128]}
      zoom={5}
      style={{height: '100%'}}
    >
      <LayersControl position='topright'>
        <LayersControl.BaseLayer checked name="Regular Layer">
          <TileLayer
            url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
          />
        </LayersControl.BaseLayer>
      </LayersControl>
    </MapContainer>
  );
}

export default App;
