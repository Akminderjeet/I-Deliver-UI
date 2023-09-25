import React, { useState } from 'react'
import './Navbar.css'
import Button from './Button.js'
import LoginForm from './Loginfom'
export default function Navbar() {
    const [loginState, setLoginState] = useState('client');
    return (
        // <div className='navbar row'>
        //     <h1 style={{ color: "white" }} className='col-md-4'>Navbar</h1>
        //     <div className='col-md-8' style={{ color: "white" }}>Hey</div>
        // </div>
        <div className='container navbar '>
            <div className='row inner-navbar' >
                <div className='col-md-6 login-role'>
                    <Button setLoginState={setLoginState}></Button>
                </div>
                <div className='col-md-6 login-options'>
                    <LoginForm loginState={loginState}></LoginForm>
                </div>
            </div>
        </div>
    )
}
