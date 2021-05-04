import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Data from "./components/ExibirAta/Data";
import RegisterUser from "./components/RegisterUser/RegisterUser";
import RegisterPassword from "./components/RegisterPassword/RegisterPassword";
import CreateAta from "./pages/Ata/CreateAta/CreateAta";
import ViewAta from "./pages/Ata/ViewAta/ViewAta";
import ViewRevisions from "./pages/ViewRevisions/ViewRevisions";
import Menu from "./components/Menu/Menu";
import { Grid } from "@material-ui/core";
import EditUser from "./pages/User/EditUser";
import UserList from "./components/UserList/UserList";
import UserProfile from "./pages/User/UserProfile";
import CreateRevision from "./pages/CreateRevision/CreateRevision";
import AtaTemplate from "./components/Ata/AtaModel/AtaTemplate";
import InfoAtaProvider, { useInfoAta } from "./context/InfoAta";
import ViewComments from "./pages/Comment/ViewComments";
import Comentarios from "./pages/Revisao/Comentarios";

function App() {
  const ata = {
    id: "01/21",
  };

  return (
    <InfoAtaProvider>
      <Router>
        <div className="App no-print">
          <Menu />
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{ marginTop: 60, marginLeft: 100, marginRight: 0 }}
          >
            <Switch>
              <Route path="/nova-ata" component={() => <CreateAta />} />
              <Route path="/visualizar-atas" component={() => <Data />} />
              <Route path="/nova-revisao" component={() => <CreateRevision />} />
              <Route path="/ata" component={() => <ViewAta />} />
              <Route path="/revisoes" component={() => <ViewRevisions />} />
              <Route path="/cadastrar-comentarios" component={() => <Comentarios />} />

              <Route exact path="/" />
              <Route path="/cadastrar-usuario" component={() => <Register />} />
              <Route path="/editar-usuario" component={() => <EditUser />} />
              <Route path="/profile" component={() => <UserProfile id={0} />} />
              <Route path="/users-list" component={() => <UserList ata={ata} />} />
              <Route path="/view-comments" component={() => <ViewComments />} />
              <Route path="/listar-usuarios" component={() => <UserList ata={ata} />} />
            </Switch>
          </Grid>
        </div>
        <AtaTemplate />
      </Router>
    </InfoAtaProvider>
  );
}
export default App;
