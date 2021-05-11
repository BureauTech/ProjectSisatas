import { Button, Container, Grid, Typography, useTheme } from "@material-ui/core";

import AtaHeader from "../../../components/Ata/CreateAta/AtaHeader";
import ProjectParticipants from "../../../components/Ata/CreateAta/ProjectParticipants";
import Pauta from "../../../components/Ata/CreateAta/Pauta";
import Topics from "../../../components/Ata/CreateAta/Topics";
import { useEffect, useState } from "react";
import "./Style.css";
import ataServices from "../../../services/ata";

import Alerta from "../../../components/Snackbar/Alerta";

const CreateAta = (props) => {
  const theme = useTheme();

  // const ata = {
  //   id: "01/21",
  // };

  const [listaAdicionados, setListaAdicionados] = useState([]);

  const [infoHeader, setInfoHeader] = useState();
  const [infoProject, setInfoProject] = useState();
  const [infoPauta, setInfoPauta] = useState();
  const [infoTopics, setInfoTopics] = useState();
  const [tema, setTema] = useState("");
  const [id, setId] = useState("");

  const [openSnack, setOpenSnack] = useState(false);
  const [msgSucesso, setMsgSucesso] = useState("");
  const [msgErro, setMsgErro] = useState("");

  // useEffect(() => {
  //   ataServices.ultimoId().then((res) => {
  //     setId(somarIdAta(res.data.ataId));
  //     console.log(res.data.ataId);
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // // recebe último ID do banco e soma 1
  // const somarIdAta = (id) => {
  //   console.log(id);
  //   let parte1 = id.split("/")[0];
  //   const parte2 = id.split("/")[1];
  //   parte1 = (Number(parte1) + 1).toString();
  //   if (parte1.length === 1) parte1 = "0" + parte1;
  //   return parte1 + "/" + parte2;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const body = {
    //   ataHeader: JSON.stringify(infoHeader),
    //   ataProject: JSON.stringify(infoProject),
    //   ataPauta: infoPauta,
    //   ataTopics: JSON.stringify(infoTopics),
    // };

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

    console.log(body);

    try {
      ataServices.criarAta(body);
      setMsgSucesso("Ata cadastrada com sucesso!");
      setMsgErro(false);
      setOpenSnack(true);
    } catch (error) {
      console.log(error.message);
      setMsgSucesso(false);
      setMsgErro("Ocorreu um erro ao cadastrar a ata");
      setOpenSnack(true);
    }
  };

  return (
    <Container>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Grid container style={{ marginBottom: 10 }}>
          <Typography style={{ paddingLeft: 24, fontSize: "1.4rem" }}>Cabeçalho</Typography>
          <AtaHeader setInfoHeader={setInfoHeader} id={id} />
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
          <Topics listaAdicionados={listaAdicionados} setInfoTopics={setInfoTopics} ataId={id} />
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
