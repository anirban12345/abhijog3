import http from "../http-common";

class PSDataService {
  getAll() {
    return http.get("/PSApi");
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
    return http.get(`/PSApi?ps_name=${psname}`);
  }
}

export default new PSDataService();
