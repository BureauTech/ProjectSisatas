import { Container, Grid, Typography } from "@material-ui/core";
import AtaHeader from "./Header";
import logo from "../../assets/images/BureauTechFundoBranco-01.png";
import "./AtaTemplate.css";
import "./printConfig.css";

const AtaTemplate = () => {
  const id = "01/21";
  const data = "25/03/2021 - 01/04/2021";
  const inicio = "08h00";
  const fim = "12h00";
  const local = "Google Meet";
  const dados = {
    id: id,
    data: data,
    inicio: inicio,
    fim: fim,
    local: local,
    logo: logo,
  };
  return (
    <Container className="print">
      <AtaHeader dados={dados} />
      <Grid>
        <Typography
          variant="h2"
          style={{ fontSize: "14pt", fontWeight: "bold" }}
        >
          ATA DE REUNIÃO
        </Typography>
      </Grid>
    </Container>
  );
};

export default AtaTemplate;
