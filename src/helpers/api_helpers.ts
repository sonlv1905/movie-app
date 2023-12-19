import axios from "axios";
import {REACT_APP_APP_URL} from "./api_url"
//apply base url for axios


const axiosApi = axios.create({
  baseURL: REACT_APP_APP_URL,
});

axios.interceptors.request.use(function (config) {
  return config;
});

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export async function get(url:string, config?:any) {
  return await axiosApi
    .get(url, {
      ...config,
    })
    .then((response) => response.data);
}
