import api from "./api";
const endpoint = "/revisoes"

const criarRevisao = (data) => {
  return api.post(`${endpoint}/cadastrarRevisoes`, data);
};

const listarRevisoes = () => {
  return api.get(`${endpoint}/listarRevisoes`)
}

const excluirRevisao = (revId) => {
  return api.get(`${endpoint}/excluirRevisoes/${revId}`)
}

const revisaoServices = {
  criarRevisao,
  listarRevisoes,
  excluirRevisao
};

export default revisaoServices;
