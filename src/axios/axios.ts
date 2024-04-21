import { Axios } from "axios";

console.log(import.meta.env.VITE_API);

const axios = new Axios({
  baseURL: import.meta.env.VITE_API,
});

axios.interceptors.request.use(
  function (config) {
    const accessToken = sessionStorage.getItem("token");
    if (accessToken) {
      config.headers.set("Authorization", `Bearer ${accessToken}`);
    }
    if (config.headers["Content-Type"] == null) {
      config.headers.setContentType("application/json");
    }
    // config.headers.set("Access-Control-Allow-Origin", "*");

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (config) {
    if (config.status === 403) {
      window.location.href = "/auth/login";
      sessionStorage.removeItem("token");
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axios;
