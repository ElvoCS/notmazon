import axios from "axios";

const instance = axios.create({
  baseUrl: "...", //api (cloud function )url
});
export default instance;
