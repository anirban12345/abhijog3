import axios from "axios";

export default axios.create({  
  //baseURL: "http://localhost:8000/api",    
  baseURL: "http://localhost:8080/MyApi",    
  headers: {     
    "Content-Type" : "application/json"   
  }
});

