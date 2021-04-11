import { Container, Grid, Typography } from "@material-ui/core";
import AtaHeader from "../../components/CreateAta/AtaHeader";
import ProjectParticipants from "../../components/CreateAta/ProjectParticipants";
import Pauta from "../../components/CreateAta/Pauta";
import Topics from "../../components/CreateAta/Topics";
import { useState } from "react";

const CreateAta = (props) => {
  const ata = {
    id: "01/21",
  };

  const [listaAdicionados, setListaAdicionados] = useState([]);

  return (
    <Container>
      <Grid container style={{ marginBottom: 10 }}>
        <Typography style={{ paddingLeft: 24, fontSize: "1.4rem" }}>
          Cabeçalho
        </Typography>
        <AtaHeader ata={ata} />
      </Grid>
      <Grid container style={{ marginBottom: 10 }}>
        <Typography style={{ paddingLeft: 24, fontSize: "1.4rem" }}>
          ATA de Reunião
        </Typography>
        <ProjectParticipants
          listaAdicionados={listaAdicionados}
          setListaAdicionados={setListaAdicionados}
        />
      </Grid>
      <Grid container style={{ marginBottom: 10 }}>
        <Typography style={{ paddingLeft: 24, fontSize: "1.4rem" }}>
          Pauta
        </Typography>
        <Pauta />
      </Grid>
      <Grid container style={{ marginBottom: 10 }}>
        <Topics listaAdicionados={listaAdicionados} />
      </Grid>
    </Container>
  );
};

export default CreateAta;
