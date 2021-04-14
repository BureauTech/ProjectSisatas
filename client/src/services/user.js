import api from "./api";

const pegarParticipantes = () => {
  return api.get("/user");
};

const pegarUsuario = (id) => {
  return api.get(`/user/${id}`);
};

const userServices = {
  pegarParticipantes,
  pegarUsuario,
};

export default userServices;
