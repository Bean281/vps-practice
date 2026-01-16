import axios from 'axios'

export const makeRequest = axios.create({
    baseURL: "http://139.59.252.90:8800/api/",
    withCredentials: true,
})