import React from 'react'
import logo from '../icons/IDeliverLogo.png'
export default function NavBar() {
    return (
        <div className='navbar-outer row'>
            <div className='col-md-4'><img src={logo} alt='abcd' width="200px" style={{ padding: '0px', margin: '0px' }} /></div>
            <div className='col-md-8'>
            </div>

        </div>
    )
}
