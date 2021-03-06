import http from "../http-common";
//import axios from "axios";

class PSDataService {
  getAll() {
    return http.get("/PSApi");
  }

  get(id) {
    return http.get(`/PSApi/${id}`);
  }

  create(data) {    
    return http.post("/PSApi", data,{
      headers: {
        "Content-Type": "multipart/form-data"
      },      
    });
  }

  update(id, data) {
    return http.put(`/PSApi/${id}`, data);
  }

  delete(id) {
    return http.delete(`/PSApi/${id}`);
  }

  deleteAll() {
    return http.delete(`/PSApi`);
  }

  findByPSname(psname) {
    return http.get(`/SearchApi/get_by_ps_name/${psname}`);
  }  

  getFiles() {
    return http.get("/SearchApi/get_all_files");
  }

  getByPagination(psname,page,per_page)
  {
    return http.get(`/SearchApi/dataByPagination/${psname}/${page}/${per_page}`);
  }

  checkLogin(data)
  {
    return http.post('/Login/checklogin',data);
  }

}

export default new PSDataService();
