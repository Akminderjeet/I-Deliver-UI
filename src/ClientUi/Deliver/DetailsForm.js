import React, { useState } from 'react'
import './Post.css'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import Confirm from './Confirm';
export default function DetailsForm({ toFromCoord, selectMode, setSelectMode }) {
    const [finalSubmit, setFinalSubmit] = useState(false);
    function changeMode(mode) {
        if (mode == 'to') {
            setSelectMode('to');
        } else {
            setSelectMode('from');
        }
    }
    function handleSubmit() {
        setFinalSubmit(true);
    }
    return (
        <div className='info-div'>
            {finalSubmit ? <Confirm finalSubmit={finalSubmit} setFinalSubmit={setFinalSubmit} toFromCoord={toFromCoord}></Confirm> : <></>}
            <div className='button-collab'>
                <div onClick={() => { changeMode('from') }} className={(selectMode == 'from' ? 'select-button' : 'not')}>From</div>
                <div onClick={() => { changeMode('to') }} className={(selectMode == 'to' ? 'select-button' : 'not')}>Destination</div>
            </div>
            <Button onClick={handleSubmit}>Submit</Button>
        </div >
    )
}
