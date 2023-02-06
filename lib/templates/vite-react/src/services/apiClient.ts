import axios, { AxiosError } from 'axios';

import appConfig from '@/config';

export const baseURL = appConfig.API_URL;

const apiClient = axios.create({
  baseURL,
  timeout: 5_000,
});

apiClient.interceptors.request.use((config) => {
  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default apiClient;

export const isAxiosError = <E>(err: unknown | AxiosError<E>): err is AxiosError<E> => {
  return axios.isAxiosError(err);
};

export * from './types';
