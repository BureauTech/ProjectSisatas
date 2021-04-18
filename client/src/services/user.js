import api from "./api";
const endpoint = "/usuarios";

const pegarUsuario = (id) => {
  return api.get(`${endpoint}/pegarUsuario/${id}`);
};

const listarUsuarios = () => {
  return api.get(`${endpoint}/listarUsuarios`);
};

const cadastrarUsuario = (body) => {
  return api.post(`${endpoint}/cadastrarUsuarios`, body);
};

const atualizarUsuario = (body) => {
  return api.post(`${endpoint}/atualizarUsuarios`, body);
};

const deletarUsuario = (id) => {
  return api.delete(`${endpoint}/excluirUsuarios/${id}`);
};

const userServices = {
  pegarUsuario,
  listarUsuarios,
  cadastrarUsuario,
  atualizarUsuario,
  deletarUsuario,
};

export default userServices;
