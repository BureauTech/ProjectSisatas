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

const listarAtas = () => {
  return api.get(`${endpoint}/listarAtas`);
}

const pegarAta = (id) => {
  return api.get(`${endpoint}/listarAtas/${id}`);
}

const ataServices = {
  criarAta,
  pegarParticipantes,
  ultimoId,
  listarAtas,
  pegarAta
};

export default ataServices;
