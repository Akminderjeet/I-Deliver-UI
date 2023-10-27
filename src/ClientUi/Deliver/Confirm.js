import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import axios, { AxiosError } from 'axios'
import { createDelivery } from '../../api';
export default function Confirm({ finalSubmit, setFinalSubmit, toFromCoord }) {
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    function cancel() {
        setFinalSubmit(false);
    }

    // const createDelivery = async (obj) => {
    //     const url = 'http://localhost:5000/';
    //     var tempUrl = url + 'client/createDelivery'
    //     await axios.post(tempUrl, { obj }, {
    //         withCredentials: true
    //     }).then((response) => {
    //         console.log(response.data);
    //         return "abcd";
    //     })
    // }

    async function handleSubmit() {
        var obj = {};
        obj.sourceLat = toFromCoord.fromLat;
        obj.sourceLong = toFromCoord.fromLong;
        obj.destinationLat = toFromCoord.toLat;
        obj.destinationLong = toFromCoord.toLong;
        obj.address = address;
        obj.city = city;
        var data = await createDelivery(obj);
        console.log(data);
        setFinalSubmit(false);
    }
    return (
        <div style={{
            width: '400px', padding: '20px', position: 'absolute',
            'backgroundColor': 'rgb(160, 160, 185)', 'zIndex': '100000', display: 'flex', flexDirection: 'column', justifyContent: 'center',
            alignItems: 'center'
        }}>
            <TextField style={{ width: '80%', height: '60%' }} id="outlined-multiline-flexible"
                label="City"
                onChange={(e) => { setCity(e.target.value) }}
            >
            </TextField>
            <TextField style={{ width: '80%', height: '60%' }} id="outlined-multiline-flexible"
                label="Add Address"
                multiline
                onChange={(e) => { setAddress(e.target.value) }}
            >
            </TextField>
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: '30px' }}>
                <CancelIcon className='cancelIcon' onClick={cancel} ></CancelIcon>
                <CheckIcon className='cancelIcon' onClick={handleSubmit}></CheckIcon>
            </div>
        </div>
    )
}
