import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Data from "./components/ExibirAta/Data";
import Register from "./components/RegisterUser/Register";
import CreateAta from "./pages/CreateAta/CreateAta";
import Comentarios from "./pages/Revisao/Comentarios";
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
              <Route path="/registeruser" component={() => <Register />} />
              <Route path="/new-record" component={() => <CreateAta />} />
              <Route path="/show-records" component={() => <Data />} />
              <Route path="/comentarios" component={() => <Comentarios />} />
              <Route path="/view-ata" component={() => <ViewAta />} />
              <Route path="/new-revision" component={() => <CreateRevision />} />
              <Route path="/show-revisions" component={() => <ViewRevisions />} />
              <Route exact path="/" />
              <Route path="/edit-user" component={() => <EditUser />} />
              <Route path="/profile" component={() => <UserProfile id={0} />} />
              <Route path="/users-list" component={() => <UserList ata={ata} />} />
            </Switch>
          </Grid>
        </div>
        <AtaTemplate />
      </Router>
    </InfoAtaProvider>
  );
}
export default App;
