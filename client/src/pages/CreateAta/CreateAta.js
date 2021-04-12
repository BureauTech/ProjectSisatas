import {
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@material-ui/core";
import AtaHeader from "../../components/CreateAta/AtaHeader";
import ProjectParticipants from "../../components/CreateAta/ProjectParticipants";
import Pauta from "../../components/CreateAta/Pauta";
import Topics from "../../components/CreateAta/Topics";
import { useState } from "react";
import "./Style.css";

const CreateAta = (props) => {
  const theme = useTheme();
  const ata = {
    id: "01/21",
  };

  const [listaAdicionados, setListaAdicionados] = useState([]);

  const [infoHeader, setInfoHeader] = useState();
  const [infoProject, setInfoProject] = useState();
  const [infoPauta, setInfoPauta] = useState();
  const [infoTopics, setInfoTopics] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(infoHeader);
    console.log(infoProject);
    console.log(infoPauta);
    console.log(infoTopics);
  };

  return (
    <Container>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Grid container style={{ marginBottom: 10 }}>
          <Typography style={{ paddingLeft: 24, fontSize: "1.4rem" }}>
            Cabeçalho
          </Typography>
          <AtaHeader ata={ata} setInfoHeader={setInfoHeader} />
        </Grid>
        <Grid container style={{ marginBottom: 10 }}>
          <Typography style={{ paddingLeft: 24, fontSize: "1.4rem" }}>
            ATA de Reunião
          </Typography>
          <ProjectParticipants
            listaAdicionados={listaAdicionados}
            setListaAdicionados={setListaAdicionados}
            setInfoProject={setInfoProject}
          />
        </Grid>
        <Grid container style={{ marginBottom: 10 }}>
          <Typography style={{ paddingLeft: 24, fontSize: "1.4rem" }}>
            Pauta
          </Typography>
          <Pauta setInfoPauta={setInfoPauta} />
        </Grid>
        <Grid container style={{ marginBottom: 10 }}>
          <Topics
            listaAdicionados={listaAdicionados}
            setInfoTopics={setInfoTopics}
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

export default CreateAta;
