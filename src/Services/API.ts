import axios from 'axios'

if (!process.env.REACT_APP_API_BASE_URL){
    throw new Error('You need to include a REACT_APP_API_BASE_URL on your environment variables!')
}

const API = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
})

export default API