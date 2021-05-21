import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ListarAta from "./pages/Ata/ViewAta/ListarAta";
import Register from "./components/RegisterUser/Register";
import CreateAta from "./pages/Ata/CreateAta/CreateAta";
import ViewAta from "./pages/Ata/ViewAta/ViewAta";
import ViewRevisions from "./pages/ViewRevisions/ViewRevisions";
import Menu from "./components/Menu/Menu";
import EditUser from "./pages/User/EditUser";
import UserList from "./components/UserList/UserList";
import UserProfile from "./pages/User/UserProfile";
import CreateRevision from "./pages/CreateRevision/CreateRevision";
import AtaTemplate from "./components/Ata/AtaModel/AtaTemplate";
import InfoAtaProvider from "./context/InfoAta";
import ViewComments from "./pages/Comment/ViewComments";
import ViewSubjects from "./pages/Subject/ViewSubjects";
import Comentarios from "./pages/Revisao/Comentarios";
import RegisterPassword from "./components/RegisterPassword/RegisterPassword";
import { useEffect } from "react";
import Login from "./pages/Login/Login";
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
