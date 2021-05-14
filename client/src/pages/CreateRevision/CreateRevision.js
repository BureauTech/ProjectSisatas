import { Button, Container, Grid, useTheme } from "@material-ui/core";

import { Link, useLocation, useHistory } from "react-router-dom";

import RevisionHeader from "../../components/CreateRevision/RevisionHeader";
import RevisionSubject from "../../components/CreateRevision/RevisionSubject";
import { useEffect, useState } from "react";
import "./Style.css";
import revisaoServices from "../../services/revisao";
import Alerta from "../../components/Snackbar/Alerta";


const CreateRevision = (props) => {
  const theme = useTheme();

  const [revAssunto, setInfoAss] = useState("");
  const [infoHeader, setRevHeader] = useState({});

  const [openSnack, setOpenSnack] = useState(false);
  const [msgSucesso, setMsgSucesso] = useState("");
  const [msgErro, setMsgErro] = useState("");

  const [user, setUser] = useState("");
  const [ataid, setAtaid] = useState("");

  const location = useLocation();


  const history = useHistory();


  const body = {
    ...infoHeader,
    revAssunto
   };
   //body.infoHeader.contemRevisoes.ataId = props.ataid;
   //body.responsavelRevisoes.usuId = props.user;

  const CriarRevisao = (e) => {
    e.preventDefault();
    

    revisaoServices.criarRevisao(body)
    .then((res) => {

        console.log(JSON.stringify(res));
        setMsgSucesso("Revisão cadastrada com sucesso!");
        setMsgErro(false);
        setOpenSnack(true);
    })
    .catch(err => {
      console.log(err);
      setMsgSucesso(false);
      setMsgErro("Ocorreu um erro ao cadastrar a revisão");
      setOpenSnack(true);
    })
      console.log("olha"+ JSON.stringify(body));

      let seu_tempo_ta_acabando = setTimeout(
        function() {
          history.push("ata", { id: location.state.ataid });
      }, 4000)
  };


  return (
    <Container>
      <form onSubmit={(e) => CriarRevisao(e)}>
        <Grid container style={{ marginBottom: 10 }}>
          <RevisionHeader setRevHeader={setRevHeader} resp={location.state.user} ataid={location.state.ataid}/>
        </Grid>
        <Grid container style={{ marginBottom: 10 }}>
          <RevisionSubject setInfoAss={setInfoAss}/>
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
              onClick={() => history.push("ata", { id: location.state.ataid })}
              
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
      <Alerta isOpen={openSnack} setIsOpen={setOpenSnack} sucesso={msgSucesso} erro={msgErro} />
    </Container>
  );
};

export default CreateRevision;
