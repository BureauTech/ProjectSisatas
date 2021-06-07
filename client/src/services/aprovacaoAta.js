import api from "./api";

const endpoint = "/aprovacaoata";

const cadastrarAprovacaoAta = (body) => {
  return api.post(`${endpoint}/cadastrarEstados`, body)
}

const pegarAprovacaoUsuario = (usuId, ataId) => {
  return api.get(`${endpoint}/estadoAprovacao/${usuId}/${ataId.replace('/', '')}`)
}

const pegarRelatorio = (ataId) => {
  return api.get(`${endpoint}/relatorio/${ataId.replace('/', '')}`)
}

const aprovacaoAtaServices = {
  cadastrarAprovacaoAta,
  pegarAprovacaoUsuario,
  pegarRelatorio
};

export default aprovacaoAtaServices;
