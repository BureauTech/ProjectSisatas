import {
  Container,
  Grid,
  withStyles,
  Typography,
  FormLabel,
  Input,
  TextareaAutosize,
  Button,
  useTheme,
  Dialog,
  DialogTitle,
  DialogActions,
} from "@material-ui/core";
import "./Components.css";
import { styles } from "../../assets/styles/Styles";
import Chips from "./Chips";
import { useState } from "react";
import revisaoServices from "../../services/revisao";
import ataServices from "../../services/ata";
import Alerta from "../Snackbar/Alerta";
import { Link, useHistory } from "react-router-dom";


// Alterando css de componentes

const ViewRevisionsComponent = (props) => {
  const { classes, setInfos, revisoes, customId } = props;
  const theme = useTheme();

  const history = useHistory();

  const [openSnack, setOpenSnack] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [msgSucesso, setMsgSucesso] = useState("");
  const [msgErro, setMsgErro] = useState("");
  const [idDelete, setIdDelete] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleAskDelete = (id) => {
    setIdDelete(id);
    setOpen(true);
  };

  const handleDelete = () => {
    revisaoServices
      .excluirRevisao(revisoes.revId)
      .then((res) => {
        if (res.data.erro === false) {
          setMsgSucesso(`Revisão ${customId} excluida com sucesso! Você será redirecionado para a ata`);
          setMsgErro(false);
          setOpenSnack(true);
          setTimeout(function () {
            history.push("ata", { id: revisoes.contemRevisoes.ataId });
          }, 1250);
        } else {
          console.log(res.data.message);
          setMsgSucesso(false);
          setMsgErro(res.data.message);
        }
        setOpenSnack(true);
      })
      .catch((err) => {
        console.log(err.message);
        setMsgSucesso(false);
        setMsgErro(`Erro ao excluir a revisão ${customId}!`);
        setOpenSnack(true);
      });
    setOpen(false);
  };

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

  const formatDate = (date) => {
    const data = new Date(date).toLocaleDateString();
    return data;
  };

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  return (
    <Container style={{ marginBottom: 15 }}>
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
                <Typography className={classes.biggerText}>Revisão</Typography>
              </Grid>
              <Grid container justify="center">
                <Typography className={classes.biggerText}>{customId}</Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* CONTEINER DA DIREITA (INFOS)*/}
          <Grid item xs={6} sm={4} md={4} lg={4} justify="center">
            <Grid item md={10} lg={12} justify="center">
              {/* ROW ATA REF */}
              <Grid container className={classes.rowMargin} justify={windowSize >= 960 ? "flex-start" : "center"}>
                <Grid item xs={12} sm={6} md={4} lg={4} justify={windowSize >= 960 ? "flex-start" : "center"}>
                  <FormLabel className={classes.normalText}>Ata Ref.</FormLabel>
                </Grid>
                <Grid item xs={12} sm={6} md={8} lg={6} className="align-self-center">
                  <Grid container justify="space-between">
                    <Grid item md={6} lg={5}>
                      <FormLabel className={classes.normalText}>
                        <strong>{revisoes.contemRevisoes.ataId}</strong>
                      </FormLabel>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* ROW PRAZO */}
              <Grid container className={classes.rowMargin}>
                <Grid item xs={12} sm={5} md={4} lg={4}>
                  <FormLabel className={classes.normalText}>Prazo</FormLabel>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                  <Grid container justify="space-between">
                    <Grid item sm={12} md={10} lg={8}>
                      <Typography
                        className={classes.normalText}
                        style={{
                          paddingRight: 20,
                          color: "white",
                        }}
                      >
                        <strong>{formatDate(revisoes.revPrazo)}</strong>
                      </Typography>
                      {/* <Input
                        className={classes.textField}
                        disableUnderline
                        type="date"
                        disabled
                        value={formatDate(revisoes.revPrazo)}
                      /> */}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={5} md={4} lg={4}>
            <Grid item md={10} lg={12}>
              {/* ROW RESPONSAVEL*/}
              <Grid container className={classes.rowMargin}>
                <Grid item>
                  <FormLabel className={classes.normalText}>Responsável</FormLabel>
                </Grid>
              </Grid>
              <Grid container className={classes.rowMargin}>
                <Grid item md={12} lg={12}>
                  <FormLabel className={classes.normalText}>
                    <strong>{revisoes.responsavelRevisoes.usuNome}</strong>
                  </FormLabel>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container className={classes.grid} style={{ padding: 20 }}>
            <Grid container className={classes.rowMargin}>
              <Grid item md={4} lg={4}>
                <FormLabel className={classes.normalText}>Assunto da Revisão</FormLabel>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <TextareaAutosize
                  disabled
                  rowsMin={7}
                  rowsMax={15}
                  // value={infoRevision}
                  value={revisoes.revAssunto}
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
            {/* <Grid item sm={4} md={3} style={{ margin: "15px 0px" }}>
              <Typography className={classes.normalText}>Aprovado</Typography>
            </Grid>
            <Grid item sm={7} md={8} style={{ margin: "15px 0px" }}>
              <Grid container>
                <Chips participantes={listaParticipantes} filtro={"Aprovado"} />
              </Grid>
            </Grid>
            <Grid item sm={4} md={3} style={{ margin: "15px 0px" }}>
              <Typography className={classes.normalText}>Pendente</Typography>
            </Grid>
            <Grid item sm={7} md={8} style={{ margin: "15px 0px" }}>
              <Grid container>
                <Chips participantes={listaParticipantes} filtro={"Pendente"} />
              </Grid>
            </Grid> */}
            <Grid container justify="space-around">
{/*              <Link to="/comentarios" style={{ textDecoration: "none" }}>
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
              </Link>*/}
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
                  onClick={handleAskDelete}
                >
                  Excluir Revisão
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Alerta isOpen={openSnack} setIsOpen={setOpenSnack} sucesso={msgSucesso} erro={msgErro} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Tem certeza que deseja excluir a revisao?</DialogTitle>
        <DialogActions>
          <Grid container justify="space-evenly">
            <Button onClick={() => handleDelete()} color="primary" variant="contained">
              EXCLUIR
            </Button>
            <Button onClick={handleClose} color="primary" variant="contained">
              Cancelar
            </Button>
          </Grid>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default withStyles(styles, { withTheme: true })(ViewRevisionsComponent);
