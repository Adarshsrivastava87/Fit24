import  {axiosInstance, handleAxiosError } from './axiosInstance';

export const loginUser = async (userData, version = '/v1') => {
  const prefix = '/auth';
  try {
    const response = await axiosInstance.post(`${version + prefix +'/login'}`, userData);
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

export const registerUser = async (userData, version = '/v1') => {
  const prefix = '/auth';
  try {
    const response = await axiosInstance.post(`${version + prefix +'/register'}`, userData);
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

export const updateUser = async (userData, version = '/v1') => {
  const prefix = '/users';
  try {
    const response = await axiosInstance.put(`${version + prefix +'/update-user'}`, userData);
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


export const logoutUser = async (userData, version = '/v1') => {
  const prefix = '/users';
  try {
    const response = await axiosInstance.post(`${version + prefix +'/logout'}`, userData);
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

export const deleteUser = async (userData, version = '/v1') => {
  const prefix = '/users';
  try {
    const response = await axiosInstance.delete(`${version + prefix +'/delete-user'}`, userData);
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


