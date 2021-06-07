import { Redirect, Route } from "react-router";
import Menu from "../components/Menu/Menu";
import { useAutenticacao } from "../context/Autenticacao";

const PrivateRoute = ({ component: Component, ajustarLayout, ...rest }) => {
  const { usuario } = useAutenticacao();
  ajustarLayout();
  return (
    <Route
      {...rest}
      render={(props) =>
        usuario.estaLogado ? (
          <>
            <Menu />
            <Component {...props} />
          </>
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
