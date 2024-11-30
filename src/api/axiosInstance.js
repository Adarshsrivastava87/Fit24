
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const axiosInstance = axios.create({
  baseURL: "https://api.fit24.ai", // Your API base URL
  timeout: 1200000, // Timeout after 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

const externalAxiosInstance = axios.create();

const handleAxiosError = (error) => {
  let errorDetails = { message: '', status: 0, data: null };

  if (error.response) {
    errorDetails.status = error.response.status;

    switch (error.response.status) {
      case 400:
        errorDetails.message = 'Bad Request';
        break;
      case 401:
        errorDetails.message = 'Unauthorized';
        break;
      case 404:
        errorDetails.message = 'Not Found';
        break;
      case 500:
        errorDetails.message = 'Internal Server Error';
        break;
      default:
        errorDetails.message = `An error occurred with status code ${error.response.status}`;
        break;
    }

    errorDetails.data = error.response.data;
  } else {
    errorDetails.message = 'Network error or other error';
    errorDetails.data = error.message;
  }

  return errorDetails;
};

axiosInstance.interceptors.request.use(
  async (config) => {
    const tokens = JSON.parse(await AsyncStorage.getItem('token'));
    if (tokens) {
      config.headers.Authorization = `Bearer ${tokens?.access?.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);



export {axiosInstance, handleAxiosError, externalAxiosInstance};
