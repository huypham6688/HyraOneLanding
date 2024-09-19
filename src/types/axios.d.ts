import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

type ClientResponse<T> = {
  status: number;
  data: T;
  _logs: [];
};

declare module "axios" {
  export interface AxiosResponse<T = any, D = any> {
    data: ClientResponse<T>;
    status: number;
    statusText: string;
    headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
    config: InternalAxiosRequestConfig<D>;
    request?: any;
  }

  export interface AxiosRequestConfig {
    toastOnError?: boolean;
  }
}

export {};
