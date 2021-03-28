import { Button } from "@material-ui/core";
import "./App.css";
import AtaTemplate from "./components/AtaModel/AtaTemplate";

function App() {
  return (
    <div className="App">
      <Button
        color="primary"
        variant="contained"
        className="no-print"
        style={{ marginTop: 100 }}
        onClick={() => window.print()}
      >
        Gerar PDF da ATA
      </Button>
      <AtaTemplate />
    </div>
  );
}

export default App;
