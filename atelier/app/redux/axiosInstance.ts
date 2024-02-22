// lib/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://wrong-eggnog-production.up.railway.app',
});

export default axiosInstance;