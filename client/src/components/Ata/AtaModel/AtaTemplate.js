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

/**
 * Arquivo base para o modelo de Ata em PDF
 * @author Denis Lima
 * @param {any} props 
 * @returns Componente de modelo de Ata em PDF
 */
const AtaTemplate = (props) => {
  const { infoAta } = useInfoAta();

  const dados = {
    id: infoAta.header.ataId ? infoAta.header.ataId : "",
    data: infoAta.header.ataDataInicio ? infoAta.header.ataDataInicio + " - " + infoAta.header.ataDataFim : "",
    inicio: infoAta.header.ataHoraInicio ? infoAta.header.ataHoraInicio : "",
    fim: infoAta.header.ataHoraFim ? infoAta.header.ataHoraFim : "",
    local: infoAta.header.ataLocal ? infoAta.header.ataLocal : "",
    logo: logo,
    tema: infoAta.projeto.ataProjeto ? infoAta.projeto.ataProjeto : "",
    listaParticipantes: infoAta.projeto.participantes ? infoAta.projeto.participantes : [],
    pauta: infoAta.pauta,
    observacoes: infoAta.observacao ? infoAta.observacao : "",
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
