import { Button, Container, Grid, Typography, useTheme } from "@material-ui/core";

import AtaHeader from "../../../components/Ata/CreateAta/AtaHeader";
import ProjectParticipants from "../../../components/Ata/CreateAta/ProjectParticipants";
import Topics from "../../../components/Ata/CreateAta/Topics";
import { useState } from "react";
import "./Style.css";
import ataServices from "../../../services/ata";

import Alerta from "../../../components/Snackbar/Alerta";
import Textarea from "../../../components/Ata/CreateAta/Textarea";

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
  const [observacao, setObservacao] = useState("");

  const clear = () => {
    setId(Math.random().toString());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!infoProject.length) {
      setMsgErro("Por favor, adicione um participante");
      setMsgSucesso(false);
      setOpenSnack(true);
      return;
    }

    if (!infoTopics.length) {
      setMsgErro("Por favor, adicione um assunto");
      setMsgSucesso(false);
      setOpenSnack(true);
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
      ataObservacao: observacao,
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
          <AtaHeader
            setInfoHeader={setInfoHeader}
            setIsOpen={setOpenSnack}
            setMsgErro={setMsgErro}
            setMsgSucesso={setMsgSucesso}
          />
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
          <Typography style={{ paddingLeft: 24, fontSize: "1.4rem" }}>Pauta*</Typography>
          <Textarea setInfo={setInfoPauta} idText='pauta' required={true} />
        </Grid>
        <Grid container style={{ marginBottom: 10 }}>
          <Typography style={{ paddingLeft: 24, fontSize: "1.4rem" }}>Observações</Typography>
          <Textarea setInfo={setObservacao} idText='obs' required={false} />
        </Grid>
        <Grid container style={{ marginBottom: 10 }}>
        <Typography style={{ paddingLeft: 24, fontSize: "1.4rem" }}>Assuntos*</Typography>
          <Topics
            listaAdicionados={listaAdicionados}
            setInfoTopics={setInfoTopics}
            setIsOpen={setOpenSnack}
            setMsgErro={setMsgErro}
            setMsgSucesso={setMsgSucesso}
            dataInicio={infoHeader.ataDataInicio}
          />
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
