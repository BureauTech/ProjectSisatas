import api from "./api";

const endpoint = "/atas";

const criarAta = (data) => {
  return api.post(`${endpoint}/cadastrarAta`, data);
};

const pegarAta = (id) => {
  return api.get(`${endpoint}/pegarAta/${id}`);
};

const ultimoId = () => {
  return api.get(`${endpoint}/ultimoRegistro`);
};

const listarAtas = (param) => {
  return api.get(`${endpoint}/listarAtas?lista=${param}`);
};

const ataServices = {
  criarAta,
  pegarAta,
  ultimoId,
  listarAtas,
};

export default ataServices;
