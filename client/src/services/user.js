import api from "./api";

const pegarUsuario = (id) => {
  return api.get(`usuarios/pegarUsuario/${id}`);
};

const listarUsuarios = () => {
  return api.get("/usuarios/listarUsuarios");
};

const cadastrarUsuario = (body) => {
  return api.post("/usuarios/cadastrarUsuarios", body);
};

const atualizarUsuario = (body) => {
  return api.post("usuarios/atualizarUsuarios", body);
};

const userServices = {
  pegarUsuario,
  listarUsuarios,
  cadastrarUsuario,
  atualizarUsuario,
};

export default userServices;
