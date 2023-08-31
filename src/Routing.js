import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

const Routing = () => {

    // Initialize the map
    function findDistance() {
        var map = L.map('map').setView([31.479874, 76.189781], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19
        }).addTo(map);
        console.log("asd")
        // Create routing control
        const routingControl = L.Routing.control({
            waypoints: [
                L.latLng(31.479874, 76.189781),
                L.latLng(30.206250, 74.979467)
            ]
        }).addTo(map);

        routingControl.on('routesfound', function (e) {
            const route = e.routes[0];
            const distance = route.summary.totalDistance; // Distance in meters
            console.log("Distance: " + distance + " meters");
        });

    }

    //map.off();
    //map.remove();


    return <><h1 onClick={findDistance}>Click to Check Distance</h1><div id="map" style={{ width: '100%', height: '400px' }}></div></>;
};

export default Routing;
