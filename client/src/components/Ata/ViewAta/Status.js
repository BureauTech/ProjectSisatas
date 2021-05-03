import { Container, Grid, Typography, withStyles } from "@material-ui/core";
import { useState } from "react";
import { styles } from "../../../assets/styles/Styles";
import Chips from "./Chips";

const Status = (props) => {
  const { classes } = props;
  const [listaParticipantes, setListaParticipantes] = useState([
    {
      nome: "Denis Lima",
      area: "Development",
      telefone: "12 123456789",
      email: "denis@bureautech.com",
      status: "Aprovado",
    },
    {
      nome: "Charles Ferreira",
      area: "Product Owner",
      telefone: "12 123456439",
      email: "charles@bureautech.com",
      status: "Aprovado",
    },
    {
      nome: "Bia Coutinho",
      area: "Development",
      telefone: "12 1267796789",
      email: "bia@bureautech.com",
      status: "Aprovado",
    },
    {
      nome: "Teste Pessoa",
      area: "Development",
      telefone: "12 123456789",
      email: "pessoa@bureautech.com",
      status: "Pendente",
    },
    {
      nome: "Pessoa Fulano",
      area: "Product Owner",
      telefone: "12 123456439",
      email: "fulano@bureautech.com",
      status: "Aprovado",
    },
    {
      nome: "Beltrano da Silva",
      area: "Development",
      telefone: "12 1267796789",
      email: "beltrano@bureautech.com",
      status: "Pendente",
    },
  ]);

  return (
    <Container>
      <Grid container className={classes.grid} justify="center" style={{ paddingBottom: 0, paddingRight: 0 }}>
        <Grid item xs={3} style={{ margin: "15px 0px" }}>
          <Typography className={classes.normalText}>Aprovado</Typography>
        </Grid>
        <Grid item xs={8} style={{ margin: "15px 0px" }}>
          <Grid container>
            <Chips participantes={listaParticipantes} filtro={"Aprovado"} />
          </Grid>
        </Grid>
        <Grid item xs={3} style={{ margin: "15px 0px" }}>
          <Typography className={classes.normalText}>Pendente</Typography>
        </Grid>
        <Grid item xs={8} style={{ margin: "15px 0px" }}>
          <Grid container>
            <Chips participantes={listaParticipantes} filtro={"Pendente"} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withStyles(styles, { withTheme: true })(Status);
