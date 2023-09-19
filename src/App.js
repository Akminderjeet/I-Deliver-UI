import { react } from "react";
import React, { useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import Routing from './Routing.js';
import Dashboard from "./Dashboard/Dashboard.js";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ClientUi from "./ClientUi/ClientUi.js";
import AdminUi from "./AdminUi/AdminUi.js";
import AgentUi from "./AgentUi/AgentUi.js";
function App() {

  return <>
    {/* <Dashboard></Dashboard> */}
    {/* <ClientUi></ClientUi> */}
    {/* <AdminUi></AdminUi> */}
    <AgentUi></AgentUi>
    {/* <Map></Map> */}
    {/* <Routing></Routing> */}
  </>
}
function Map() {
  //const position = [31.479971, 76.189688];
  const [positions, setPositions] = useState([[32.08257455954592, 76.02049574256014]]);
  const mapRef = useRef(null);
  function MyComponent() {
    const map = useMapEvents({
      click: (e) => {
        console.log("asdf");
        const { lat, lng } = e.latlng;
        //console.log(lat, lng);
        setPositions([...positions, [lat, lng]]);
        console.log(positions)
        //L.marker([lat, lng], { icon }).addTo(map);
      }
    });
    return null;
  }
  return (
    <MapContainer center={positions[0]} zoom={5} style={{ width: '100%', height: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MyComponent></MyComponent>
      {positions.map((position, index) => (
        < Marker key={index} position={position} >
          <Popup>Your Location</Popup>
        </Marker>
      ))}

    </MapContainer >
  );

}

export default App;
/*import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

const Map = () => {
    const [markers, setMarkers] = useState([]);
    const map = useMap();

    const handleMapClick = (event) => {
        const newMarker = {
            id: markers.length,
            latlng: event.latlng,
        };

        setMarkers([...markers, newMarker]);
    };

    return (
        <MapContainer
            center={[YOUR_DEFAULT_LATITUDE, YOUR_DEFAULT_LONGITUDE]}
            zoom={15}
            style={{ width: '100%', height: '400px' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {markers.map(marker => (
                <Marker key={marker.id} position={marker.latlng}>
                    <Popup>Marker {marker.id}</Popup>
                </Marker>
            ))}
            <EventHandlingLayer onClick={handleMapClick} />
        </MapContainer>
    );
};

// A separate component to handle map click event
const EventHandlingLayer = ({ onClick }) => {
    const map = useMapEvents({
        click: (event) => {
            onClick(event);
        },
    });

    return null;
};

export default Map;
 */