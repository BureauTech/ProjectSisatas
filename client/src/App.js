import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Data from "./components/ExibirAta/Data";
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
import Comentarios from "./pages/Revisao/Comentarios";
import RegisterPassword from "./components/RegisterPassword/RegisterPassword";

function App() {
  const ata = {
    id: "01/21",
  };

  const ajustarLayout = () => {
    if (window.innerWidth < 600) {
      document.body.style.padding = "80px 0px 0px 0px";
    } else {
      document.body.style.padding = "80px 0px 0px 100px";
    }
  };

  window.addEventListener("resize", ajustarLayout);

  return (
    <InfoAtaProvider>
      <Router>
        <div className="App no-print">
          <Menu />
          <Switch>
            <Route path="/nova-ata" component={() => <CreateAta />} />
            <Route path="/visualizar-atas" component={() => <Data />} />
            <Route path="/nova-revisao" component={() => <CreateRevision />} />
            <Route path="/ata" component={() => <ViewAta />} />
            <Route path="/revisoes" component={() => <ViewRevisions />} />
            <Route path="/cadastrar-comentarios" component={() => <Comentarios />} />

            <Route exact path="/" />
            <Route path="/cadastrar-usuario" component={() => <Register />} />
            <Route path="/cadastrar-senha" component={() => <RegisterPassword />} />
            <Route path="/editar-usuario" component={() => <EditUser />} />
            <Route path="/profile" component={() => <UserProfile id={0} />} />
            <Route path="/users-list" component={() => <UserList ata={ata} />} />
            <Route path="/view-comments" component={() => <ViewComments />} />
            <Route path="/listar-usuarios" component={() => <UserList ata={ata} />} />
          </Switch>
        </div>
        <AtaTemplate />
      </Router>
    </InfoAtaProvider>
  );
}
export default App;
