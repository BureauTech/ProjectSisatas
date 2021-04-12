import api from "./api";

const criarAta = (data) => {
  api.post("/createata", data);
};

const pegarParticipantes = () => {
  api.get("/createata");
};

const ataServices = {
  criarAta,
  pegarParticipantes,
};

export default ataServices;
