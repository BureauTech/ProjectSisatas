import {
  Button,
  Container,
  Grid,
  useTheme,
} from "@material-ui/core";

import RevisionHeader from "../../components/CreateRevision/RevisionHeader";
import RevisionSubject from "../../components/CreateRevision/RevisionSubject";
import { useState } from "react";
import "./Style.css";

const CreateRevision = (props) => {
  const theme = useTheme();

  return (
    <Container>
      <form>
        <Grid container style={{ marginBottom: 10 }}>
          <RevisionHeader />
        </Grid>
        <Grid container style={{ marginBottom: 10 }}>
          <RevisionSubject />
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
