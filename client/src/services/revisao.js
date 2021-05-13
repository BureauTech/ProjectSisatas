import api from "./api";

const criarRevisao = (data) => {
  return api.post("/revisoes/cadastrarRevisoes", data);
};

const revisaoServices = {
  criarRevisao,
};

export default revisaoServices;
