import { Button, Container, Grid, Typography, useTheme } from "@material-ui/core";

import AtaHeader from "../../../components/Ata/CreateAta/AtaHeader";
import ProjectParticipants from "../../../components/Ata/CreateAta/ProjectParticipants";
import Pauta from "../../../components/Ata/CreateAta/Pauta";
import Topics from "../../../components/Ata/CreateAta/Topics";
import { useState } from "react";
import "./Style.css";
import ataServices from "../../../services/ata";

import Alerta from "../../../components/Snackbar/Alerta";

const CreateAta = (props) => {
  const theme = useTheme();

  const [listaAdicionados, setListaAdicionados] = useState([]);

  const [infoHeader, setInfoHeader] = useState({});
  const [infoProject, setInfoProject] = useState([]);
  const [infoPauta, setInfoPauta] = useState("");
  const [infoTopics, setInfoTopics] = useState([]);
  const [tema, setTema] = useState("");
  const [openSnack, setOpenSnack] = useState(false);
  const [msgSucesso, setMsgSucesso] = useState("");
  const [msgErro, setMsgErro] = useState("");
  const [id, setId] = useState("1");

  const clear = () => {
    setId(Math.random().toString());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!infoTopics.length || !infoProject.length || !tema.length || Object.values(infoHeader).includes("")) {
      return;
    }

    let ass = infoTopics;
    ass.forEach((assunto) => {
      delete assunto.inCharge;
      assunto.assId = "";
    });

    let participantesIds = [];

    infoProject.forEach((participante) => {
      let id = { usuId: participante.usuId };
      participantesIds.push(id);
    });

    const header = { ...infoHeader };

    const body = {
      ...header,
      ataProjeto: tema,
      participaAtas: participantesIds,
      ataPauta: infoPauta,
      assuntos: ass,
    };

    ataServices
      .criarAta(body)
      .then((res) => {
        setMsgSucesso("Ata cadastrada com sucesso!");
        setMsgErro(false);
        setOpenSnack(true);
        clear();
      })
      .catch((error) => {
        console.log(error.message);
        setMsgSucesso(false);
        setMsgErro("Ocorreu um erro ao cadastrar a ata");
        setOpenSnack(true);
      });
  };

  return (
    <Container key={id}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Grid container style={{ marginBottom: 10 }}>
          <Typography style={{ paddingLeft: 24, fontSize: "1.4rem" }}>Cabeçalho</Typography>
          <AtaHeader setInfoHeader={setInfoHeader} />
        </Grid>
        <Grid container style={{ marginBottom: 10 }}>
          <Typography style={{ paddingLeft: 24, fontSize: "1.4rem" }}>ATA de Reunião</Typography>
          <ProjectParticipants
            listaAdicionados={listaAdicionados}
            setListaAdicionados={setListaAdicionados}
            setInfoProject={setInfoProject}
            tema={tema}
            setTema={setTema}
          />
        </Grid>
        <Grid container style={{ marginBottom: 10 }}>
          <Typography style={{ paddingLeft: 24, fontSize: "1.4rem" }}>Pauta</Typography>
          <Pauta setInfoPauta={setInfoPauta} />
        </Grid>
        <Grid container style={{ marginBottom: 10 }}>
          <Topics listaAdicionados={listaAdicionados} setInfoTopics={setInfoTopics} />
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
              marginTop: 10,
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
              marginTop: 10,
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

export default CreateAta;
