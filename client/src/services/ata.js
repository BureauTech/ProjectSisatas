import api from "./api";

const endpoint = "/atas";

const criarAta = (data) => {
  return api.post(`${endpoint}/cadastrarAta`, data);
};

const pegarParticipantes = () => {
  return api.get(`${endpoint}/`);
};

const ultimoId = () => {
  return api.get(`${endpoint}/ultimoRegistro`);
};

const ataServices = {
  criarAta,
  pegarParticipantes,
  ultimoId,
};

export default ataServices;
