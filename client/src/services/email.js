import api from "./api";
const endpoint = "/email";

const enviaAtaEmail = (users) => {
    return api.post(`${endpoint}/envioAtaEmail`, users);
}

const enviaRevEmail = (users) => {
    return api.post(`${endpoint}/novaRevisao`, users);
}

const emailServices = {
    enviaAtaEmail,
    enviaRevEmail
}

export default emailServices;