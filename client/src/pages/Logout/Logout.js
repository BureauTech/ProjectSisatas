import { useAutenticacao } from "../../context/Autenticacao";

/**
 * Arquivo para lidar com o logOut do usuário
 * @author Denis Lima
 * @param {any} props props
 * @returns Retorna o logOut do usuário, destruindo o token e dados de sessão
 */
const Logout = (props) => {
  const { usuario, setUsuario } = useAutenticacao();
  if (usuario.estaLogado) {
    setUsuario({
      estaLogado: false,
      usuSessionToken: "",
      usuNome: "",
      usuId: "",
      usuEmail: "",
      usuCargo: "",
      usuAreaEmpresa: "",
      usuTelefone: "",
      usuPerfil: "",
    });
    localStorage.removeItem("sisata_token");
  }
  return <> </>;
};

export default Logout;
