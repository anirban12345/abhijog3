import http from "../http-common";

class PSDataService {
  getAll(params) {
    return http.get("/policestation",{ params });
  }

  get(id) {
    return http.get(`/policestation/${id}`);
  }

  create(data) {    
    return http.post("/policestation", data);
  }

  update(id, data) {
    return http.put(`/policestation/${id}`, data);
  }

  delete(id) {
    return http.delete(`/policestation/${id}`);
  }

  deleteAll() {
    return http.delete(`/policestation`);
  }

  findByPSname(psname) {
    return http.get(`/policestation?ps_name=${psname}`);
  }
}

export default new PSDataService();
