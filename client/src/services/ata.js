import api from "./api";

const criarAta = (data) => {
  api.post("/createata", data);
};

const ataServices = {
  criarAta,
};

export default ataServices;
