import api from "./api";
const endpoint = "/atas";

const listarAtas = (param) => {
  return api.get(`${endpoint}/listarAtas?lista=${param}`);
};

const dataServices = {
  listarAtas,
};

export default dataServices;
