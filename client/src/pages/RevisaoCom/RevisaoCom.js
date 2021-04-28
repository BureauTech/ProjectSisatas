import {
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@material-ui/core";

import Pauta from "../../components/CreateAta/RevisaoCom";
import { useState } from "react";
import "./Style.css";
import ataServices from "../../services/ata";

const CreateAta = (props) => {
  const theme = useTheme();

  const [infoPauta, setInfoPauta] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
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
          <Typography style={{ paddingLeft: 24, fontSize: "1.4rem" }}>
            Comentários
          </Typography>
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
            Comentar
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

export default CreateAta;
