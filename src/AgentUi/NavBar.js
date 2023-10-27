import React from 'react'
import logo from '../icons/IDeliverLogo.jpg'
export default function NavBar() {
    return (
        <div className='navbar-outer row'>
            <div className='col-md-2'><img src={logo} alt='abcd' width="100%" style={{ padding: '0px', margin: '0px' }} /></div>
            <div className='col-md-10'>
            </div>

        </div>
    )
}
