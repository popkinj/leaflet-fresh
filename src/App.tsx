import React from 'react';
import 'leaflet/dist/leaflet.css';
import {
  MapContainer,
  TileLayer
} from 'react-leaflet';
import './App.css';

function App() {
  return (
    <MapContainer
      center={[55,-128]}
      zoom={5}
      style={{height: '100%'}}
    >
      <TileLayer
        url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
      />
    </MapContainer>
  );
}

export default App;
