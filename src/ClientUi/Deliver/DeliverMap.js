import React, { useEffect } from 'react'
import { useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';

export default function DeliverMap({ centerCoord }) {
    const [positions, setPositions] = useState([]);
    const mapRef = useRef(null);

    function doit() {
        console.log(centerCoord)
    }
    doit();

    function MyComponent() {
        const map = useMapEvents({
            click: (e) => {
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
        <MapContainer center={centerCoord} zoom={12} style={{ width: '100%', height: '400px', margin: '10px' }} dragging='true'>
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

