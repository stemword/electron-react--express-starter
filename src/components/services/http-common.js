import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:4567/api",
  //baseURL: "http://ec2-54-179-181-65.ap-southeast-1.compute.amazonaws.com/api",
  headers: {
    "Content-type": "application/json"
  }
});
