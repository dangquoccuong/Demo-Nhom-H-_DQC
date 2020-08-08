import axios from "axios";

const getApi = axios.create({
  baseURL: process.env.REACT_APP_API_NODE,
  headers: {
    "content-type": "application/json", 
  },
});

getApi.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});

getApi.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export default getApi;
