import { Button, Container, Grid, useTheme } from "@material-ui/core";

import { Link } from "react-router-dom";

import RevisionHeader from "../../components/CreateRevision/RevisionHeader";
import RevisionSubject from "../../components/CreateRevision/RevisionSubject";
import { useState } from "react";
import "./Style.css";
import revisaoServices from "../../services/revisao";

const CreateRevision = (props) => {
  const theme = useTheme();
  const CriarRevisao = (e) => {
    e.preventDefault();
    const body = {
      revAssunto: "assunto1",
      revPrazo: "12/12/12",
    };
    try {
      revisaoServices.criarRevisao(body);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      <form onSubmit={(e) => CriarRevisao(e)}>
        <Grid container style={{ marginBottom: 10 }}>
          <RevisionHeader />
        </Grid>
        <Grid container style={{ marginBottom: 10 }}>
          <RevisionSubject />
        </Grid>
        <Grid container justify="space-between" style={{ padding: 24 }}>
          <Link to="/ata" style={{ textDecoration: "none" }}>
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
          </Link>
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
