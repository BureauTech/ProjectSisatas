import { useAutenticacao } from "../../context/Autenticacao";

const Logout = (props) => {
  const { usuario, setUsuario } = useAutenticacao();
  if (usuario.estaLogado) {
    setUsuario({
      estaLogado: false,
      token: "",
      usuNome: "",
      usuId: "",
      usuEmail: "",
      usuCargo: "",
      usuAreaEmpresa: "",
      usuTelefone: "",
      usuPerfil: "",
    });
  }
  return <> </>;
};

export default Logout;
