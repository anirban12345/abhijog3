import axios from "axios";

export default axios.create({
  baseURL: "https://scientificwing.kolkatapolice.org/Abhijog/",
  headers: {
    "Content-type": "application/json"
  }
});
