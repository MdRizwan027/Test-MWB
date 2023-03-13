import axios from "axios";

export default axios.create({
  baseURL: "https://knackfee.com/api",
  headers: {
    "Content-type": "application/json",
  }
});