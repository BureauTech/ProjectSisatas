import {
  Container,
  Grid,
  withStyles,
  Typography,
  FormLabel,
  Input,
  TextareaAutosize,
  Button,
  useTheme
} from "@material-ui/core";
import "./Components.css";
import { styles } from "../../assets/styles/Styles";
import Chips from "./Chips";
import { useState } from "react";

// Alterando css de componentes

const ViewRevisionsComponent = (props) => {
  const { classes } = props;
  const theme = useTheme();
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
      <Grid container style={{ marginBottom: 10 }}>
        <Typography style={{ paddingLeft: 24, fontSize: "1.4rem" }}>
          Exibir Revisões
          </Typography>
      </Grid>
      <Grid container>
        <Grid
          container
          className={classes.grid}
          alignItems="center"
          justify="space-evenly"
          style={{ paddingTop: 15, paddingBottom: 15 }}
        >
          {/* LATERAL ESQUERDA (NÚMERO DA REVISÃO)*/}
          <Grid item sm={10} md={3} lg={4}>
            <Grid container justify="center">
              <Grid container justify="center">
                <Typography className={classes.biggerText}>Revisão Nº:</Typography>
              </Grid>
              <Grid container justify="center">
                <Typography className={classes.biggerText}>02</Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* CONTEINER DA DIREITA (INFOS)*/}
          <Grid item xs={12} sm={10} md={5} lg={4}>
            <Grid item xs={11} md={10} lg={12}>
              {/* ROW ATA REF */}
              <Grid container className={classes.rowMargin}>
                <Grid item md={4} lg={4}>
                  <FormLabel className={classes.normalText}>
                    Ata Ref.
                  </FormLabel>
                </Grid>
                <Grid item xs={12} md={8} lg={6} >
                  <Grid container justify="space-between">
                    <Grid item xs={7} md={6} lg={5}>
                      <FormLabel className={classes.normalText}>
                        <strong>01/21</strong>
                      </FormLabel>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* ROW PRAZO */}
              <Grid container className={classes.rowMargin}>
                <Grid item md={4} lg={4}>
                  <FormLabel className={classes.normalText}>
                    Prazo
                  </FormLabel>
                </Grid>
                <Grid item xs={12} md={8} lg={8}>
                  <Grid container justify="space-between">
                    <Grid item xs={7} md={8} lg={8}>
                      <Input
                        className={classes.textField}
                        disableUnderline
                        type="date"
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={10} md={4} lg={4}>
            <Grid item xs={11} md={10} lg={12}>
              {/* ROW RESPONSAVEL*/}
              <Grid container className={classes.rowMargin}>
                <Grid item md={4} lg={4}>
                  <FormLabel className={classes.normalText}>
                    Responsável
                  </FormLabel>
                </Grid>
              </Grid>
              <Grid container className={classes.rowMargin}>
                <Grid item xs={10} md={12} lg={12}>
                  <FormLabel className={classes.normalText}><strong>Fulano da Silva</strong></FormLabel>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container className={classes.grid} style={{ padding: 20 }}>
            <Grid container className={classes.rowMargin}>
              <Grid item md={4} lg={4}>
                <FormLabel className={classes.normalText}>
                  Assunto da Revisão
                  </FormLabel>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <TextareaAutosize
                  disabled
                  rowsMin={7}
                  rowsMax={15}
                  // value={infoRevision}
                  style={{
                    width: "100%",
                    fontSize: "1.8rem",
                    borderBottomLeftRadius: "20px",
                    borderTopLeftRadius: "20px",
                    color: "white",
                    paddingLeft: 10,
                    paddingBottom: 20,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid container className={classes.grid} justify="center" style={{ paddingBottom: 0, paddingRight: 0 }}>
            <Grid item xs={4} sm={4} md={3} style={{ margin: "15px 0px" }}>
              <Typography className={classes.normalText}>Aprovado</Typography>
            </Grid>
            <Grid item xs={6} sm={7} md={8} style={{ margin: "15px 0px" }}>
              <Grid container>
                <Chips participantes={listaParticipantes} filtro={"Aprovado"} />
              </Grid>
            </Grid>
            <Grid item xs={4} sm={4} md={3} style={{ margin: "15px 0px" }}>
              <Typography className={classes.normalText}>Pendente</Typography>
            </Grid>
            <Grid item xs={6} sm={7} md={8} style={{ margin: "15px 0px" }}>
              <Grid container>
                <Chips participantes={listaParticipantes} filtro={"Pendente"} />
              </Grid>
            </Grid>
            <Grid item style={{ margin: "15px 0px" }}>
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
                Exibir Comentários
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withStyles(styles, { withTheme: true })(ViewRevisionsComponent);
