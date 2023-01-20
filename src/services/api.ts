import axios from "axios";

const api = axios.create({
  baseURL: "https://frontend-challenge-7bu3nxh76a-uc.a.run.app",
  timeout: 10000,
  headers: { "content-type": "application/json" },
});
export default api;
