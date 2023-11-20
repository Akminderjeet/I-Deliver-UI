import React, { useEffect, useState, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './NavBar'
import Menu from './Menu'
import PostUi from './Deliver/PostUi'
import Request from './Request/Request.js'
import './AdminUi.css'
import TrackUi from './Track/PostUi.js'
export default function AdminUi() {
    return (
        <div className='container-fluid outer-div'>
            <NavBar></NavBar>
            <div className='row' style={{ width: '100%' }}>
                <div className="col-md-2" style={{ padding: '0px' }}> <Menu></Menu></div>
                <div className="col-md-10" style={{ padding: '0px' }}>
                    <Routes>
                        <Route path="/addnode" element={<PostUi />} />
                        <Route path="/request" element={<Request />} />
                        <Route path="/track" element={<TrackUi />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

