import { Button, Container, Grid, Typography, useTheme } from "@material-ui/core";

import AtaHeader from "../../../components/Ata/ViewAta/AtaHeader";
import ProjectParticipants from "../../../components/Ata/ViewAta/ProjectParticipants";
import Pauta from "../../../components/Ata/ViewAta/Pauta";
import Topics from "../../../components/Ata/ViewAta/Topics";
import { useEffect, useState } from "react";
import "../CreateAta/Style.css";
import ataServices from "../../../services/ata";
import Status from "../../../components/Ata/ViewAta/Status";
import { useInfoAta } from "../../../context/InfoAta";

const ViewAta = (props) => {
  const theme = useTheme();
  const { setInfoAta } = useInfoAta();

  const infoHeader = {
    id: "02/21",
    dtInicio: "23/04/2021",
    hrInicio: "18:30",
    dtFinal: "10/05/2021",
    hrFinal: "20:00",
    local: "Google Meet",
  };

  const infoProject = {
    participantes: [
      {
        nome: "Denis Lima",
        area: "Development",
        telefone: "12 123456789",
        email: "denis@bureautech.com",
        status: "Aprovado",
        cargo: "Teste",
      },
      {
        nome: "Charles Ferreira",
        area: "Product Owner",
        telefone: "12 123456439",
        email: "charles@bureautech.com",
        status: "Aprovado",
        cargo: "Teste",
      },
      {
        nome: "Bia Coutinho",
        area: "Development",
        telefone: "12 1267796789",
        email: "bia@bureautech.com",
        status: "Aprovado",
        cargo: "Teste",
      },
      {
        nome: "Teste Pessoa",
        area: "Development",
        telefone: "12 123456789",
        email: "pessoa@bureautech.com",
        status: "Pendente",
        cargo: "Teste",
      },
      {
        nome: "Pessoa Fulano",
        area: "Product Owner",
        telefone: "12 123456439",
        email: "fulano@bureautech.com",
        status: "Aprovado",
        cargo: "Teste",
      },
      {
        nome: "Beltrano da Silva",
        area: "Development",
        telefone: "12 1267796789",
        email: "beltrano@bureautech.com",
        status: "Pendente",
        cargo: "Teste",
      },
    ],
    projeto: "Site para gerenciar atas",
  };

  const infoPauta = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem magni tempora alias optio et incidunt quibusdam facere praesentium, consectetur necessitatibus vel similique architecto fugit. Dolores tempore recusandae consectetur voluptate quod.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, assumenda officiis. Numquam similique quis ullam molestias iste soluta ut eaque unde nam excepturi. Laboriosam repudiandae commodi atque id at maxime!`;

  const infoTopics = [
    {
      id: 1,
      topic: "Documentação",
      inCharge: "Charles Ferreira",
      datetime: "2021-05-10T20:00",
    },
    {
      id: 2,
      topic: "CRUD Usuários",
      inCharge: "Beatriz Coutinho",
      datetime: "2021-05-10T20:00",
    },
    {
      id: 3,
      topic: "CRUD Atas",
      inCharge: "Charles Ferreira",
      datetime: "2021-05-10T20:00",
    },
  ];

  useEffect(() => {
    setInfoAta({
      header: infoHeader,
      projeto: infoProject,
      pauta: infoPauta,
      assuntos: infoTopics,
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  // Alterna entre os estados "Open" e "Close" da lista
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Grid container style={{ marginBottom: 10 }}>
        <Typography style={{ paddingLeft: 24, fontSize: "1.4rem" }}>Cabeçalho</Typography>
        <AtaHeader infoHeader={infoHeader} />
      </Grid>
      <Grid container style={{ marginBottom: 10 }}>
        <Typography style={{ paddingLeft: 24, fontSize: "1.4rem" }}>ATA de Reunião</Typography>
        <ProjectParticipants infoProject={infoProject} />
      </Grid>
      <Grid container style={{ marginBottom: 10 }}>
        <Typography style={{ paddingLeft: 24, fontSize: "1.4rem" }}>Pauta</Typography>
        <Pauta infoPauta={infoPauta} />
      </Grid>
      <Grid container style={{ marginBottom: 10 }}>
        <Topics isOpen={isOpen} handleClick={handleClick} infoTopics={infoTopics} />
      </Grid>
      <Grid container style={{ marginBottom: 10 }}>
        <Typography style={{ paddingLeft: 24, fontSize: "1.4rem" }}>Status</Typography>
        <Status />
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
            borderRadius: 16,
            padding: "0 5px",
          }}
        >
          Cancelar
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className="bold"
          style={{
            color: "white",
            fontSize: "1.5rem",
            borderRadius: 16,
            padding: "0 5px",
          }}
          onClick={handleClick}
        >
          Visualizar Assuntos
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className="bold"
          style={{
            color: "white",
            fontSize: "1.5rem",
            borderRadius: 16,
            padding: "0 5px",
          }}
        >
          Revisões Pendentes
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className="bold"
          style={{
            color: "white",
            fontSize: "1.5rem",
            borderRadius: 16,
            padding: "0 5px",
          }}
        >
          Visualizar Revisões
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className="bold"
          style={{
            color: "white",
            fontSize: "1.5rem",
            borderRadius: 16,
            padding: "0 5px",
          }}
        >
          Nova Revisão
        </Button>
      </Grid>
    </Container>
  );
};

export default ViewAta;
