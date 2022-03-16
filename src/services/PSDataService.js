import http from "../http-common";

class PSDataService {
  getAll(params) {
    return http.get("/PSApi",{ params });
  }

  get(id) {
    return http.get(`/PSApi/${id}`);
  }

  create(data) {    
    return http.post("/PSApi", data);
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
    return http.get(`/policestation?ps_name=${psname}`);
  }
}

export default new PSDataService();
