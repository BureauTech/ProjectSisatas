import {
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@material-ui/core";

import RevisionHeader from "../../components/CreateRevision/RevisionHeader";
import Pauta from "../../components/CreateRevision/Pauta";
import { useState } from "react";
import "./Style.css";
import ataServices from "../../services/ata";

const CreateRevision = (props) => {
  const theme = useTheme();

  const ata = {
    id: "01/21",
  };

  const [infoHeader, setInfoHeader] = useState();
  const [infoPauta, setInfoPauta] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      ataHeader: JSON.stringify(infoHeader),
      ataPauta: infoPauta,
    };

    try {
      ataServices.criarAta(body);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Grid container style={{ marginBottom: 10 }}>
          <RevisionHeader ata={ata} setInfoHeader={setInfoHeader} />
        </Grid>
        <Grid container style={{ marginBottom: 10 }}>
          <Pauta setInfoPauta={setInfoPauta} />
        </Grid>
        <Grid container justify="space-between" style={{ padding: 24 }}>
          <Button
            variant="contained"
            className="bold"
            style={{
              backgroundColor: "white",
              color: theme.palette.secondary.main,
              fontWeight: 700,
              fontSize: "1.5rem",
              borderRadius: 20,
              padding: "0 30px",
            }}
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className="bold"
            type="submit"
            style={{
              color: "white",
              fontSize: "1.5rem",
              borderRadius: 20,
              padding: "0 30px",
            }}
          >
            Salvar
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

export default CreateRevision;
