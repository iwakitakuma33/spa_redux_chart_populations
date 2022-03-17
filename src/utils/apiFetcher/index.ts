import Axios from "axios";

const DOMAIN = "https://opendata.resas-portal.go.jp";
const BASE_URL = "/api/v1";

const axios = Axios.create({
  headers: {
    "X-API-KEY": process.env.REACT_APP_API_KEY,
  },
});

enum Method {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  PUT = "PUT",
  DELETE = "DELETE",
}

export const apiFetcher = {
  get(endpoint: string) {
    return makeRequest(endpoint, Method.GET);
  },
  post(endpoint: string) {
    return makeRequest(endpoint, Method.POST);
  },
  put(endpoint: string) {
    return makeRequest(endpoint, Method.PUT);
  },
  delete(endpoint: string) {
    return makeRequest(endpoint, Method.DELETE);
  },
  patch(endpoint: string) {
    return makeRequest(endpoint, Method.PATCH);
  },
};

function makeRequest(endpoint: string, method: Method) {
  return axios({
    url: `${DOMAIN}${BASE_URL}${endpoint}`,
    method,
  });
}
