import { Container, Grid, Typography } from "@material-ui/core";
import logo from "../../../assets/images/iacit-logo.jpg";
import denisSign from "../../../assets/images/signTest/denis.png";
import biaSign from "../../../assets/images/signTest/bia.png";
import jpSign from "../../../assets/images/signTest/jp.png";
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

  console.log(infoAta);
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
  // const id = "01/21";
  // const data = "25/03/2021 - 01/04/2021";
  // const inicio = "08h00";
  // const fim = "12h00";
  // const local = "Google Meet";
  // const tema = "Gerenciador de ATAS";
  // const listaParticipantes = [
  //   {
  //     nome: "Denis Ferreira Lima",
  //     cargo: "Desenvolvedor",
  //     area: "BureauTech",
  //     email: "denis@bureautech.com",
  //     telefone: "+55 (12) 991234567",
  //     assinatura: denisSign,
  //   },
  //   {
  //     nome: "Beatriz Coutinho",
  //     cargo: "Desenvolvedor",
  //     area: "BureauTech",
  //     email: "bia@bureautech.com",
  //     telefone: "+55 (12) 997654321",
  //     assinatura: biaSign,
  //   },
  //   {
  //     nome: "João Pedro Santos",
  //     cargo: "Master",
  //     area: "BureauTech",
  //     email: "jp@bureautech.com",
  //     telefone: "+55 (12) 995746321",
  //     assinatura: jpSign,
  //   },
  // ];
  // const pauta =
  //   "Na presente reunião foi requisitado que fosse estudado e desenvolvido um meio de exportar a ATA para PDF";
  // const observacoes = [
  //   "Deve ser disponibilizada cópia da Ata de Reunião para os participantes e envolvidos",
  //   "O campo PRAZO define as datas de entrega das solicitações por parte dos responsáveis definidos no campo RESPONSÁVEL.",
  // ];
  // const assuntos = [
  //   {
  //     id: 1,
  //     assunto: "Exportar HTML para PDF",
  //     responsavel: "Denis Lima",
  //     prazo: "28/03/2021",
  //   },
  //   {
  //     id: 2,
  //     assunto: "Auxiliar na criação do HTML",
  //     responsavel: "Beatriz Coutinho",
  //     prazo: "28/03/2021",
  //   },
  //   {
  //     id: 3,
  //     assunto: "Validar e remover impedimentos",
  //     responsavel: "João Pedro",
  //     prazo: "28/03/2021",
  //   },
  // ];

  // const dados = {
  //   id: id,
  //   data: data,
  //   inicio: inicio,
  //   fim: fim,
  //   local: local,
  //   logo: logo,
  //   tema: tema,
  //   listaParticipantes: listaParticipantes,
  //   pauta: pauta,
  //   observacoes: observacoes,
  //   assuntos: assuntos,
  // };

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
