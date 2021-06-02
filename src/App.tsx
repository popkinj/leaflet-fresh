import React from 'react';
import 'leaflet/dist/leaflet.css';
import PouchDB from 'pouchdb-browser';
import {
  MapContainer,
  TileLayer,
  LayersControl
} from 'react-leaflet';
import PouchDBTileLayer from "react-leaflet-pouchdb-tilelayer";
import './App.css';

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
        {/* <LayersControl.BaseLayer name="Pouch Offline Layer">
          <PouchDBTileLayer
            url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}'
            crossOrigin={true}
          />
        </LayersControl.BaseLayer> */}
      </LayersControl>
    </MapContainer>
  );
}

export default App;
