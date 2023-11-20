import React from 'react'
import axios, { AxiosError } from 'axios'

const url = 'http://localhost:5000/';
export const deleteRequest = async (id) => {
    var tempUrl = url + "admin/deleteRequest";
    return axios.patch(`${tempUrl}/${id}`, {
        withCredentials: true
    })
}
export const acceptRequest = async (id) => {
    var tempUrl = url + "admin/acceptRequest";
    return axios.patch(`${tempUrl}/${id}`, {
        withCredentials: true
    })
}
export const trackPoints = () => {
    var tempUrl = url + "admin/trackpoints/";
    console.log("sdfsdfsdf")
    return axios.get(tempUrl, {
        withCredentials: true
    })
}