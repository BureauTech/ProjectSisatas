import api from "./api";

const endpoint = "/logs";

const salvarLogs = (body) => {
  return api.post(`${endpoint}/cadastrarLogs`, body);
};

const pegarLogs = () => {
  return api.get(`${endpoint}/listarLogs`);
};

const logServices = {
  salvarLogs,
  pegarLogs,
};

export default logServices;
