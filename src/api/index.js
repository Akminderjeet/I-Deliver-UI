import React from 'react'
import axios, { AxiosError } from 'axios'

const url = 'http://localhost:5000/';
export const googleAdminLogin = () => {
    var googleUrl = url + 'abcde/';
    axios.get(googleUrl, {
        withCredentials: true
    });
}

export const addMidNode = (obj) => {
    var tempUrl = url + 'admin/addmidpoint';
    axios.post(tempUrl, { obj }, {
        withCredentials: true
    })
}

export const createDelivery = (obj) => {
    var tempUrl = url + 'client/createDelivery'
    axios.post(tempUrl, { obj }, {
        withCredentials: true
    })
}
