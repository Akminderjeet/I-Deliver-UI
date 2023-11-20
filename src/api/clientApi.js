import React from 'react'
import axios, { AxiosError } from 'axios'

const url = 'http://localhost:5000/';
export const getHistory = async (id) => {
    var tempUrl = url + "client/history";
    console.log("YUPPP")
    return axios.get(tempUrl, {
        withCredentials: true
    })
}

export const getPath = async (obj) => {
    var tempUrl = url + "client/getpath";
    console.log("YUPPP")
    return axios.post(tempUrl, obj, {
        withCredentials: true
    })
}
