import api from "./api";

const pegarUsuario = (id) => {
  return api.get(`/user/${id}`);
};

const listarUsuarios = () => {
  return api.get("/usuarios/listarUsuarios");
};

const cadastrarUsuario = (body) => {
  return api.post("/usuarios/cadastrarUsuarios", body);
};

const userServices = {
  pegarUsuario,
  listarUsuarios,
  cadastrarUsuario,
};

export default userServices;
