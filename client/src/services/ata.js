import api from "./api";

const endpoint = "/atas";

const criarAta = (data) => {
  api.post(`${endpoint}/cadastrarAta`, data);
};

const pegarParticipantes = () => {
  api.get(`${endpoint}/`);
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
