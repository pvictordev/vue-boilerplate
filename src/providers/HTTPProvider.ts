import axios, { type AxiosStatic } from "axios";
import type { App } from "vue";
import VueAxios from "vue-axios";

// statefull
// axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_API_URL;
const url = window.location.href;

if (url.includes("localhost")) {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL;
} else {
  axios.defaults.baseURL = window.location.origin + "/api";
}

export default class HTTPProvider {
  provide(app: App) {
    app.use(VueAxios, axios);
    this.boot();
  }
  boot() {
    this.handleRequest();
    this.handleResponse();
  }

  handleRequest() {
    axios.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => Promise.reject(error)
    );
  }

  handleResponse() {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.response.status === 401) {
        } else if (error.response.status === 403) {
        } else {
          return Promise.reject(error);
        }
      }
    );
  }
}
