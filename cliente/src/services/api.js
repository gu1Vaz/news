import axios from 'axios';
const api = axios.create({
    //baseURL: 'https://hackin.online'
    baseURL: 'http://localhost:3333'
})

export default api;