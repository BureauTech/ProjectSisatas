import { Button, Container, Grid, useTheme } from "@material-ui/core";

import { Link } from "react-router-dom";

import RevisionHeader from "../../components/CreateRevision/RevisionHeader";
import RevisionSubject from "../../components/CreateRevision/RevisionSubject";
import { useEffect, useState } from "react";
import "./Style.css";
import revisaoServices from "../../services/revisao";
import userServices from "../../services/user";
import ataServices from "../../services/ata";

const CreateRevision = (props) => {
  const {ataid, user} = props;
  const theme = useTheme();

  const [revAssunto, setInfoAss] = useState("");
  const [infoHeader, setRevHeader] = useState({});

  const [usu, setUsu] = useState();
  const [ata, setAta] = useState();

  const body = {
    ...infoHeader,
    revAssunto
   };
   //body.infoHeader.contemRevisoes.ataId = props.ataid;
   //body.responsavelRevisoes.usuId = props.user;

  const CriarRevisao = (e) => {
    e.preventDefault();
    try {
      //revisaoServices.criarRevisao(body);
      console.log("olha"+ JSON.stringify(body));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container>
      <form onSubmit={(e) => CriarRevisao(e)}>
        <Grid container style={{ marginBottom: 10 }}>
          <RevisionHeader setRevHeader={setRevHeader} resp={props.user} ataid={props.ataid}/>
        </Grid>
        <Grid container style={{ marginBottom: 10 }}>
          <RevisionSubject setInfoAss={setInfoAss}/>
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
