import api from "./api";
const endpoint = "/usuarios";

/**
 * Arquivo de serviços/requisições relacionados a usuários
 */


/**
 * Busca um usuário específico no banco
 * @author Denis Lima
 * @param {Number} id id do usuário
 * @returns Retorna uma promessa do AxiosResponse com os dados do usuário
 */

const pegarUsuario = (id) => {
  return api.get(`${endpoint}/pegarUsuario/${id}`);
};

/**
 * Busca uma lista de usuários no banco, sendo dados para o componente DataGrid ou lista de participantes para Atas.
 * @author Charles Ferreira
 * @param {String} param DataGrid ou Participante
 * @returns Retorna uma promessa do AxiosResponse com os dados do(s) usuário(s)
 */
const listarUsuarios = (param) => {
  return api.get(`${endpoint}/listarUsuarios?lista=${param}`);
};

/**
 * Cadastra um usuário no banco
 * @author Denis Lima
 * @param {Object} body Body da requisição
 * @returns Retorna uma promessa do AxiosResponse informando se o cadastro foi realizado ou não
 */
const cadastrarUsuario = (body) => {
  return api.post(`${endpoint}/cadastrarUsuarios`, body);
};

/**
 * Atualiza os dados de um usuário no banco
 * @author Denis Lima
 * @param {Object} body Body da requisição
 * @returns Retorna uma promessa do AxiosResponse informando se o usuário foi atualizado
 */
const atualizarUsuario = (body) => {
  return api.put(`${endpoint}/atualizarUsuarios`, body);
};

/**
 * Deleta os dados de um usuário no banco
 * @author Denis Lima
 * @param {Number} id id do usuário
 * @returns Retorna uma promessa do AxiosResponse informando se o usuário foi deletado
 */
const deletarUsuario = (id) => {
  return api.delete(`${endpoint}/excluirUsuarios/${id}`);
};

/**
 * Solicita a alteração de senha
 * @author Charles Ferreira
 * @param {String} param Email do usuário
 * @returns Retorna uma promessa do AxiosResponse confirmando que a solicitação de alteração da senha foi bem sucedida
 */
const solicitarAlteracaoSenha = (param) => {
  return api.post(`${endpoint}/solicitarAlteracaoSenha?usu_email=${param}`);
};

/**
 * Atualiza a senha do usuário
 * @author Denis Lima
 * @param {String} usu_token Token do usuário
 * @param {String} usu_senha Senha do usuário
 * @returns Retorna uma promessa do AxiosResponse confirmando se a alteração de senha foi bem sucedida
 */
const alterarSenha = (usu_token, usu_senha) => {
  return api.post(`${endpoint}/alterarSenha?usu_token=${usu_token}&usu_senha=${usu_senha}`);
};

/**
 * Verifica se o token de troca de senha é válido
 * @author Charles Ferreira
 * @param {String} param Token do usuário
 * @returns Retorna uma promessa do AxiosResponse confirmando se o token é válido para troca de senha
 */
const validadorToken = (param) => {
  return api.get(`${endpoint}/validadorToken?usu_token=${param}`);
};

/**
 * Realiza o login do usuário
 * @author Denis Lima
 * @param {String} usu_email Email do usuário
 * @param {String} usu_senha Senha do usuário
 * @returns Retorna uma promessa do AxiosResponse com dados de sessão e token caso o email e senha sejam os cadastrados
 */
const logIn = (usu_email, usu_senha) => {
  return api.post(`${endpoint}/validarEmailSenha?usu_email=${usu_email}&usu_senha=${usu_senha}`);
};

/**
 * Valida o token de sessão e pega os dados da sessão
 * @author Denis Lima
 * @param {String} usu_token Token do usuário
 * @returns Retorna uma promessa do AxiosResponse com dados de sessão e token caso o token seja válido
 */
const validarTokenSessao = (usu_token) => {
  return api.get(`${endpoint}/validadorSessionToken?usu_sessionToken=${usu_token}`);
};

/**
 * Altera a senha do usuário que está logado
 * @author Denis Lima
 * @param {number} usu_id Id do usuário
 * @param {string} usu_senha_nova senha nova
 * @param {string} usu_senha_antiga senha antiga (atual)
 * @returns Retorna uma promessa do AxiosResponse informando se foi um sucesso ou qual o erro
 */
const alterarSenhaLogado = (usu_id, usu_senha_nova, usu_senha_antiga) => {
  return api.post(`${endpoint}/alterarSenhaLogado?usu_id=${usu_id}&usu_senha_nova=${usu_senha_nova}&usu_senha_antiga=${usu_senha_antiga}`);
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
  logIn,
  validarTokenSessao,
  alterarSenhaLogado
};

export default userServices;
