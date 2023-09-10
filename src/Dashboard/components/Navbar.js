import React from 'react'
import './Navbar.css'
import Button from './Button.js'
import LoginForm from './Loginfom'
export default function Navbar() {
    return (
        // <div className='navbar row'>
        //     <h1 style={{ color: "white" }} className='col-md-4'>Navbar</h1>
        //     <div className='col-md-8' style={{ color: "white" }}>Hey</div>
        // </div>
        <div className='container navbar '>
            <div className='row inner-navbar' >
                <div className='col-md-6 login-role'>
                    <Button></Button>
                </div>
                <div className='col-md-6 login-options'>
                    <LoginForm></LoginForm>
                </div>
            </div>
        </div>
    )
}
