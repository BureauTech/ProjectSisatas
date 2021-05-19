import api from "./api";
const endpoint = "/usuarios";

const pegarUsuario = (id) => {
  return api.get(`${endpoint}/pegarUsuario/${id}`);
};

const listarUsuarios = (param) => {
  return api.get(`${endpoint}/listarUsuarios?lista=${param}`);
};

const cadastrarUsuario = (body) => {
  return api.post(`${endpoint}/cadastrarUsuarios`, body);
};

const atualizarUsuario = (body) => {
  return api.put(`${endpoint}/atualizarUsuarios`, body);
};

const deletarUsuario = (id) => {
  return api.delete(`${endpoint}/excluirUsuarios/${id}`);
};

const solicitarAlteracaoSenha = (body) => {
  return api.post(`${endpoint}/solicitarAlteracaoSenha`)
}

const alterarSenha = (body) => {
  return api.post(`${endpoint}/solicitarAlteracaoSenha`)
}

const userServices = {
  pegarUsuario,
  listarUsuarios,
  cadastrarUsuario,
  atualizarUsuario,
  deletarUsuario,
  solicitarAlteracaoSenha,
  alterarSenha
};

export default userServices;
