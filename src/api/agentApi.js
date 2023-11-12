import React from 'react'
import axios, { AxiosError } from 'axios'

const url = 'http://localhost:4000/';

export const getOrders = () => {
    var tempUrl = url + "agent/getOrders/";
    return axios.get(tempUrl, {
        withCredentials: true
    })
}

export const acceptOrder = (obj) => {
    var tempUrl = url + "agent/pickup/";
    return axios.post(tempUrl, obj, {
        withCredentials: true
    })
}
export const deliverOrder = (obj) => {
    var tempUrl = url + "agent/deliver/";
    console.log("Delivery initiated")
    return axios.post(tempUrl, obj, {
        withCredentials: true
    })
}