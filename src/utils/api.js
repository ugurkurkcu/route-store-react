import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com/",
  timeout: 4000,
  timeoutErrorMessage: "İstek zaman aşımına uğradı",
});

export default api;
