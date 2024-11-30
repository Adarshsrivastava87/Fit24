import  {axiosInstance, handleAxiosError } from './axiosInstance';

export const sendUserActivityData = async (userData, version = '/v1') => {
  const prefix = '/data';
  try {
    const response = await axiosInstance.post(`${version + prefix +'/daily/update'}`, userData);
    if(response.data) {
      return {data : response.data, status: true};
    } else {
      return response;
    }
  } catch (error) {
    const errorObject = handleAxiosError(error)
    return errorObject
  }
};

export const getUserActivityData = async (version = '/v1') => {
  const prefix = '/data';
  try {
    const response = await axiosInstance.get(`${version + prefix +'/distance'}`);
    if(response.data) {
      return {data : response.data, status: true};
    } else {
      return response;
    }
  } catch (error) {
    const errorObject = handleAxiosError(error)
    return errorObject
  }
};


export const getPeriodicUserActivityData = async (path) => {
  const prefix = '/data';
  try {
    const response = await axiosInstance.get(`${'/v1' + prefix + path}`);
    if(response.data) {
      return {data : response.data, status: true};
    } else {
      return response;
    }
  } catch (error) {
    const errorObject = handleAxiosError(error)
    return errorObject
  }
};