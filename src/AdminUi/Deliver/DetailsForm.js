import React from 'react'
import './Post.css'
import { Button } from 'react-bootstrap';
export default function DetailsForm() {
    return (
        <div className='info-div'>
            <input placeholder='Name of The Point'></input>
            <input placeholder='City'></input>
            <Button>Submit</Button>
        </div>
    )
}
