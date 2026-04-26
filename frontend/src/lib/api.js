import axios from "axios";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:8000";
export const API = `${BACKEND_URL}/api`;
export const api = axios.create({ baseURL: API });
export const listResumes = () => api.get("/resumes").then(r => r.data);
export const getResume = (id) => api.get(`/resumes/${id}`).then(r => r.data);
export const createResume = (p) => api.post("/resumes", p).then(r => r.data);
export const updateResume = (id, p) => api.put(`/resumes/${id}`, p).then(r => r.data);
export const deleteResume = (id) => api.delete(`/resumes/${id}`).then(r => r.data);
export const exportPdf = async (payload) => {
  const res = await api.post("/export-pdf", payload, { responseType: "blob" });
  const url = URL.createObjectURL(res.data);
  const a = document.createElement("a");
  a.href = url;
  const name = (payload.personal?.fullName || payload.name || "resume").replace(/\s+/g, "_");
  a.download = `${name}.pdf`;
  a.click();
  URL.revokeObjectURL(url);
};
