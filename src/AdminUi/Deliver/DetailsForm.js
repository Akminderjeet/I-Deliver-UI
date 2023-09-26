import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import './Post.css'
import { addMidNode } from '../../api/index.js'
export default function DetailsForm({ position, setPosition }) {
    const [postData, setpostData] = useState({
        city: '', name: ''
    });
    function handleSubmit() {
        var postObject = {};
        postObject.city = postData.city;
        postObject.name = postData.name;
        postObject.latitude = position[0];
        postObject.longitude = position[1];
        console.log(postObject);
        addMidNode(postObject);

    }
    return (
        <div className='info-div'>
            <TextField placeholder='Name of the point' value={postData.name} onChange={(e) => { setpostData({ ...postData, name: e.target.value }) }}></TextField>
            <TextField placeholder='City' value={postData.city} onChange={(e) => { setpostData({ ...postData, city: e.target.value }) }}></TextField>
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
    )
}
