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

export const createDelivery = async (obj) => {
    var tempUrl = url + 'client/createDelivery'
    return await axios.post(tempUrl, { obj }, {
        withCredentials: true
    });
}

export const setCoordinates = async (obj) => {
    var tempUrl = 'http://localhost:4000/setCoordinates/';
    axios.post(tempUrl, { obj }, {
        withCredentials: true
    })
}
export const setProfile = async (obj) => {
    var tempUrl = 'http://localhost:4000/setProfile';
    axios.post(tempUrl, { obj }, {
        withCredentials: true
    })
}

export const getRequest = async (obj) => {
    var tempUrl = url + 'admin/getRequest'
    return await axios.get(tempUrl, {
        withCredentials: true
    })
}
