import api from "./api";
const endpoint = "/revisoes"

const criarRevisao = (data) => {
  return api.post(`${endpoint}/cadastrarRevisoes`, data);
};

const listarRevisoes = () => {
  return api.get(`${endpoint}/listarRevisoes`)
}

const revisaoServices = {
  criarRevisao,
  listarRevisoes,
};

export default revisaoServices;
