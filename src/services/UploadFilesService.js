import http from "../http-common";

class UploadFilesService {
  upload(file, onUploadProgress) {
    var formData = new FormData();
    formData.append("userfile", file);
    return http.post("/SearchApi/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress
    });
  }
  getFiles() {
    return http.get("/SearchApi/get_all_files");
  }
}
export default new UploadFilesService();
