import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});
api.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
api.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
export default api;
