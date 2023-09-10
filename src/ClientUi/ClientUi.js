import React from 'react'
import NavBar from './NavBar'
import Menu from './Menu'
import './ClientUi.css'
export default function ClientUi() {
    return (
        <div className='container-fluid outer-div'>
            <NavBar></NavBar>
            <div className='row' style={{ width: '100%' }}>
                <div className="col-md-3" style={{ padding: '0px' }}> <Menu></Menu></div>
                <div className="col-md-9" style={{ background: 'pink' }}> Sexy</div>
            </div>
        </div>
    )
}

