import api from "./api";
const endpoint = "/comentarios/cadastrarComentarios";

const salvarComentario = (body) => {
  return api.post(`${endpoint}`, body);
};

const comentarios = {
  salvarComentario,
};


export default comentarios;
