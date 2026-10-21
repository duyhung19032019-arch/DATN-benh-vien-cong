import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5094/api', // Đã chuyển sang cổng HTTP 5094 khớp với Swagger
    headers: {
        'Content-Type': 'application/json',
    }
});

export default API;