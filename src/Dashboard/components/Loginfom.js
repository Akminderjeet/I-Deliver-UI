import React from 'react'
import './Loginform.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
export default function Loginfom() {
    return (
        <div className='outer-div'>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <input type="button" value={"Submit"} />
            <div className='direct-login'>
                <button className='google-btn' >
                    <FontAwesomeIcon icon={faGoogle} />
                </button>
            </div>
        </div>
    )
}
