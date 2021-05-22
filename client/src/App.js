import AtaTemplate from "./components/Ata/AtaModel/AtaTemplate";
import InfoAtaProvider from "./context/InfoAta";
import { useEffect } from "react";
import { useAutenticacao } from "./context/Autenticacao";
import Routes from "./routes/Routes";

function App() {
  const { usuario } = useAutenticacao();

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
    ajustarLayout();
  }, []);

  return (
    <InfoAtaProvider>
      <div className="App no-print">
        <Routes ajustarLayout={ajustarLayout} />
      </div>
      <AtaTemplate />
    </InfoAtaProvider>
  );
}
export default App;
