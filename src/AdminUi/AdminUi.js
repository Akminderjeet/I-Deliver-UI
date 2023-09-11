import React, { useEffect, useState, Suspense } from 'react'
import NavBar from './NavBar'
import Menu from './Menu'
import PostUi from './Deliver/PostUi'
import './AdminUi.css'
export default function AdminUi() {
    return (
        <div className='container-fluid outer-div'>
            <NavBar></NavBar>
            <div className='row' style={{ width: '100%' }}>
                <div className="col-md-2" style={{ padding: '0px' }}> <Menu></Menu></div>
                <div className="col-md-10" style={{ background: 'pink', padding: '0px' }}> <PostUi></PostUi></div>
            </div>
        </div>
    )
}

