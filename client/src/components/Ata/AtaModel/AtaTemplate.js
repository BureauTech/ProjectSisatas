import { Container, Grid, Typography } from "@material-ui/core";
import logo from "../../../assets/images/iacit-logo.jpg";
import "./AtaTemplate.css";
import "./printConfig.css";
import AtaHeader from "./Header";
import Participantes from "./Participantes";
import Pauta from "./Pauta";
import Observacoes from "./Observacoes";
import Assunto from "./Assunto";
import Assinaturas from "./Assinaturas";
import { useInfoAta } from "../../../context/InfoAta";

const AtaTemplate = (props) => {
  const { infoAta } = useInfoAta();

  const dados = {
    id: infoAta.header.id ? infoAta.header.id : "",
    data: infoAta.header.dtInicio ? infoAta.header.dtInicio + " - " + infoAta.header.dtFinal : "",
    inicio: infoAta.header.hrInicio ? infoAta.header.hrInicio : "",
    fim: infoAta.header.hrFinal ? infoAta.header.hrFinal : "",
    local: infoAta.header.local ? infoAta.header.local : "",
    logo: logo,
    tema: infoAta.projeto.projeto ? infoAta.projeto.projeto : "",
    listaParticipantes: infoAta.projeto.participantes ? infoAta.projeto.participantes : [],
    pauta: infoAta.pauta,
    observacoes: infoAta.observacoes ? infoAta.observacoes : [],
    assuntos: infoAta.assuntos ? infoAta.assuntos : "",
  };

  return (
    <Container>
      <Container className="print page">
        <AtaHeader dados={dados} />
        <Grid container justify="center" style={{ height: "1.25cm" }}>
          <Typography variant="h2" style={{ fontSize: "14pt", fontWeight: "bold" }}>
            ATA DE REUNIÃO
          </Typography>
        </Grid>
        <Participantes dados={dados} />
        <Pauta dados={dados} />
        <Observacoes dados={dados} />
        <Assunto dados={dados} />
      </Container>
      <Container className="print page second">
        <Grid container justify="flex-start">
          <Typography style={{ fontSize: "12pt" }}>
            <strong>Continuação da Ata nº.: {dados.id}</strong>
          </Typography>
          <Assinaturas dados={dados} />
        </Grid>
      </Container>
    </Container>
  );
};

export default AtaTemplate;
