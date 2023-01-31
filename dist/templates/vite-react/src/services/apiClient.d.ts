import { AxiosError } from 'axios';
export declare const baseURL: any;
declare const apiClient: any;
export default apiClient;
export declare const isAxiosError: <E>(err: any) => err is AxiosError<E>;
export * from './types';
