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

  findByTitle(title) {
    return http.get(`/PSApi?ps_id=${title}`);
  }
}

export default new PSDataService();
