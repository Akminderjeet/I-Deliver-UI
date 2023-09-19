import React, { useState } from 'react'
import './AgentUi.css'
import NavBar from './NavBar'
import Menu from './Menu.js'
import PostUi from './Deliver/PostUi'
export default function AgentUi() {
    /*const [location, setlocation] = useState([37, 37]);
    navigator.geolocation.watchPosition((position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
    })*/
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
