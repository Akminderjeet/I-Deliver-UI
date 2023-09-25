import React from 'react'
import axios from 'axios'

const url = 'http://localhost:5000/';
export const googleAdminLogin = () => {
    var googleUrl = url + 'abcde/';
    axios.get(googleUrl, {
        withCredentials: true
    });
}
