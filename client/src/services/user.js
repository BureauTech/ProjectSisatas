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

const solicitarAlteracaoSenha = (param) => {
  return api.post(`${endpoint}/solicitarAlteracaoSenha?usu_email=${param}`);
};

const alterarSenha = (usu_token, usu_senha) => {
  return api.post(`${endpoint}/alterarSenha?usu_token=${usu_token}&usu_senha=${usu_senha}`);
};

const validadorToken = (param) => {
  return api.get(`${endpoint}/validadorToken?usu_token=${param}`);
};

const userServices = {
  pegarUsuario,
  listarUsuarios,
  cadastrarUsuario,
  atualizarUsuario,
  deletarUsuario,
  solicitarAlteracaoSenha,
  alterarSenha,
  validadorToken,
};

export default userServices;
