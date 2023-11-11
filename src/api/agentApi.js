import React from 'react'
import axios, { AxiosError } from 'axios'

const url = 'http://localhost:4000/';

export const getOrders = () => {
    console.log("dddddddddddd")
    var tempUrl = url + "agent/getOrders/";
    return axios.get(tempUrl, {
        withCredentials: true
    })
}