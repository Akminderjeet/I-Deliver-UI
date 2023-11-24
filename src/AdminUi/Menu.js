import React from 'react'
import './AdminUi.css'
export default function Menu() {
    function changeColor(id) {
        var myDiv = document.getElementById(id);
        myDiv.classList.toggle("selected-div");
    }
    return (
        <ul className='menu-outer-div' >
            <h6 style={{ width: "85%" }} id='point' className='menu-list' onClick={() => { changeColor("point") }}>Add Delivery Point</h6>
            <h6 style={{ width: "85%" }} id='notification' className='menu-list' onClick={() => { changeColor("notification") }}>Notifications</h6>
            <h6 style={{ width: "85%" }} id='request' className='menu-list' onClick={() => { changeColor("request") }}>Requests</h6>
            <h6 style={{ width: "85%" }} id='help' className='menu-list' onClick={() => { changeColor("help") }}>Help</h6>
            <h6 style={{ width: "85%" }} id='feedback' className='menu-list' onClick={() => { changeColor("feedback") }}>Feedback</h6>
        </ul >
    )
}
