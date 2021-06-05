import AtaTemplate from "./components/Ata/AtaModel/AtaTemplate";
import InfoAtaProvider from "./context/InfoAta";
import { useEffect } from "react";
import { useAutenticacao } from "./context/Autenticacao";
import Routes from "./routes/Routes";
import { getLocalStorage, setLocalStorage } from "./auth/auth";
import userServices from "./services/user";
import MenuProvider from "./context/Menu";

/**
 * Arquivo base da aplicação
 * @author Denis Lima
 * @returns Retorna os elementos base da aplicação e suas rotas
 */
function App() {
  const { usuario, setUsuario } = useAutenticacao();

  const ajustarLayout = (n) => {
    if (usuario.estaLogado) {
      if (n === "0") {
        document.body.style.padding = "0px 0px 0px 0px";
        document.body.style.margin = "0";
        document.body.style.overflow = "auto";
      } else {
        if (window.innerWidth < 600) {
          document.body.style.padding = "80px 0px 0px 0px";
          document.body.style.margin = "0";
          document.body.style.overflow = "auto";
        } else {
          document.body.style.padding = "80px 0px 0px 100px";
          document.body.style.margin = "0";
          document.body.style.overflow = "auto";
        }
      }
    } else {
      document.body.style.margin = "10% auto";
      document.body.style.padding = "0";
      document.body.style.overflow = "hidden";
    }
  };

  window.addEventListener("resize", ajustarLayout);

  useEffect(() => {
    /**
     * Função para verificar se há token salvo
     * Caso haja e não está expirado, recupera as informações com o servidor
     * @author Denis Lima
     */
    async function verificarLogado() {
      const token = getLocalStorage("sisata_token");
      if (token) {
        const { data } = await userServices.validarTokenSessao(token);
        if (!data.erro) {
          const dados = data.data;
          setUsuario({ ...dados, estaLogado: true });
          setLocalStorage("sisata_token", dados.usuSessionToken, 120);
        }
      }
    }
    verificarLogado();
    ajustarLayout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <InfoAtaProvider>
      <MenuProvider>
        <div className="App no-print">
          <Routes ajustarLayout={ajustarLayout} />
        </div>
        <AtaTemplate />
      </MenuProvider>
    </InfoAtaProvider>
  );
}
export default App;
