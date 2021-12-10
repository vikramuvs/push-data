const axios = require("axios").default;

// import axios from "axios";

export default axios.create({
  baseURL:
    "http://ec2-54-214-223-171.us-west-2.compute.amazonaws.com:8080/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});
