import api from "./api";
const endpoint = "/email";

const enviaAtaEmail = (users) => {
    return api.post(`${endpoint}/envioAtaEmail`, users);
}

const enviaRevEmail = (users) => {
    return api.post(`${endpoint}/novaRevisao`, users);
}

const novoUsuario = (user) => {
    return api.post(`${endpoint}/usuarioCadastrado`, user);
}

const esqueciSenha = (user) => {
    return api.post(`${endpoint}/esqueciSenha`, user);
}

const emailServices = {
    enviaAtaEmail,
    enviaRevEmail,
    novoUsuario,
    esqueciSenha
}

export default emailServices;