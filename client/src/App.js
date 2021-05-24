import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import Notificacoes from "./pages/Notificacoes/Notificacoes";

import { useEffect } from "react";

function App() {
  const ajustarLayout = (n) => {
    if (n === "0") {
      document.body.style.padding = "0px 0px 0px 0px";
    } else {
      if (window.innerWidth < 600) {
        document.body.style.padding = "80px 0px 0px 0px";
      } else {
        document.body.style.padding = "80px 0px 0px 100px";
      }
    }
  };

  window.addEventListener("resize", ajustarLayout);

  useEffect(() => {
    ajustarLayout();
  }, []);

  return (
    <InfoAtaProvider>
      <Router>
        <div className="App no-print">
          <Menu />
          <Switch>
            <Route path="/nova-ata" component={() => <CreateAta />} />
            <Route path="/visualizar-atas" component={() => <ListarAta />} />
            <Route path="/nova-revisao" component={() => <CreateRevision />} />
            <Route path="/ata" component={() => <ViewAta ajustarLayout={ajustarLayout} />} />
            <Route path="/revisoes" component={() => <ViewRevisions />} />
            <Route path="/cadastrar-comentarios" component={() => <Comentarios />} />

            <Route exact path="/" component={() => <Notificacoes />} />
            <Route path="/cadastrar-usuario" component={() => <Register />} />
            <Route path="/cadastrar-senha" component={() => <RegisterPassword />} />
            <Route path="/editar-usuario" component={() => <EditUser />} />
            <Route path="/perfil" component={() => <UserProfile id={1} />} />
            <Route path="/comentarios" component={() => <ViewComments />} />
            <Route path="/assuntos" component={() => <ViewSubjects />} />
            <Route path="/listar-usuarios" component={() => <UserList />} />
          </Switch>
        </div>
        <AtaTemplate />
      </Router>
    </InfoAtaProvider>
  );
}
export default App;
