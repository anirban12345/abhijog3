import axios from "axios";

export default axios.create({
  //baseURL: "http://localhost:8080/MyApi",  
  baseURL:"http://localhost:8080/test",
  headers: { 
    "Content-Type": "application/json"    
  }
});