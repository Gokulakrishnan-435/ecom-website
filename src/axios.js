import axios from "axios";
let instance = axios.create({
  baseURL: "http://localhost:5001/ecommerce-f29d5/us-central1/api",
});
export default instance;
