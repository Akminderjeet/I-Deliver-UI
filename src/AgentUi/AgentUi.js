import React, { useState } from 'react'
import './AgentUi.css'
import NavBar from './NavBar'
import Menu from './Menu.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostUi from './Deliver/PostUi'
import Profile from './Profile/Profile';
import { useEffect } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';
import { setCoordinates } from '../api';
import Orders from './Order/Orders.js';
const socket = io.connect("http://localhost:4000");
export default function AgentUi() {
    /*const [location, setlocation] = useState([37, 37]);
    navigator.geolocation.watchPosition((position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
    })*/
    while (localStorage.getItem("city") == null || localStorage.getItem("city" == "")) {
        let foo = prompt('Enter Your City');
        localStorage.setItem("city", foo);

    }
    var cityy = localStorage.getItem("city");
    socket.on(cityy, (msg) => {
        // alert(msg);
        const url = 'http://localhost:4000/setCoordinates';
        const obj = {};
        obj.city = cityy;
        navigator.geolocation.getCurrentPosition((position) => {
            console.log("asdfafs")
            obj.lat = position.coords.latitude;
            obj.lng = position.coords.longitude;
            setCoordinates(obj);
        });

    })
    return (
        <div className='container-fluid outer-div'>
            <NavBar></NavBar>
            <div className='row' style={{ width: '100%' }}>
                <div className="col-md-2" style={{ padding: '0px', height: '100%' }}> <Menu></Menu></div>

                <div className="col-md-10" style={{ background: 'white', padding: '0px', overflowY: "scroll", height: "92vh", overflowX: "hidden" }}>
                    <Routes>
                        <Route path="/addnode" element={<PostUi />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/orders" element={<Orders />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}
