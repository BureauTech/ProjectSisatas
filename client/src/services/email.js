import api from "./api";
const endpoint = "/email";

const enviaAtaEmail = (users) => {
    return api.post(`${endpoint}/envioAtaEmail`, users);
}

const emailServices = {
    enviaAtaEmail
}

export default emailServices;