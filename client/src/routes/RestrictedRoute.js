import { Redirect } from "react-router";
import { useAutenticacao } from "../context/Autenticacao";
import PrivateRoute from "./PrivateRoute";

/**
 * Arquivo para criar rotas restritas ao perfil do usuário  
 * ADM pode acessar todas as rotas
 * @author Denis Lima
 * @param {any} props props
 * @returns Retorna uma rota privada, onde o ADM ou um usuário específico pode acessar
 */
const RestrictedRoute = ({ allowed, location, ...rest }) => {
  const { usuario } = useAutenticacao();
  return usuario.usuPerfil === allowed || usuario.usuPerfil === "ADM" ? (
    <PrivateRoute {...rest} />
  ) : (
    <Redirect to={{ pathname: "/", state: { from: location } }} />
  );
};

export default RestrictedRoute;
