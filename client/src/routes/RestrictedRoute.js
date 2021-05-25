import { Redirect } from "react-router";
import { useAutenticacao } from "../context/Autenticacao";
import PrivateRoute from "./PrivateRoute";

const RestrictedRoute = ({ allowed, location, ...rest }) => {
  const { usuario } = useAutenticacao();
  console.log("Permissão", usuario.usuPerfil, allowed);
  return usuario.usuPerfil === allowed || usuario.usuPerfil === "ADM" ? (
    <PrivateRoute {...rest} />
  ) : (
    <Redirect to={{ pathname: "/", state: { from: location } }} />
  );
};

export default RestrictedRoute;
