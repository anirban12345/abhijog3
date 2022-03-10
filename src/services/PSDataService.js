import http from "../http-common";

class PSDataService {
  getAll() {
    return http.get("/PSApi");
  }

  get(id) {
    return http.get(`/MyApi.php/${id}`);
  }

  create(data) {    
    return http.post("/PSApi", data);
  }

  update(id, data) {
    return http.put(`/MyApi.php/${id}`, data);
  }

  delete(id) {
    return http.delete(`/MyApi.php/${id}`);
  }

  deleteAll() {
    return http.delete(`/MyApi.php`);
  }

  findByPSname(psname) {
    return http.get(`/MyApi.php?ps_name=${psname}`);
  }
}

export default new PSDataService();
