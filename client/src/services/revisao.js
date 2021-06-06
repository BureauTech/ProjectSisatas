import api from "./api";
const endpoint = "/revisoes"

const criarRevisao = (data) => {
  return api.post(`${endpoint}/cadastrarRevisoes`, data);
};

const aprovarRevisao = (revId) => {
  return api.post(`${endpoint}/aprovarRevisao`, revId);
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
  excluirRevisao,
  aprovarRevisao
};

export default revisaoServices;
