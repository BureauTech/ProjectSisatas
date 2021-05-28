import {
  Container,
  FormLabel,
  Grid,
  Input,
  withStyles,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  Typography,
  Slide,
  IconButton,
} from "@material-ui/core";
import { AddCircle, Cancel, Delete, ExpandMore } from "@material-ui/icons";
import "./Components.css";
import { styles } from "../../../assets/styles/Styles";
import ParticipantsRow from "./ParticipantsRow";
import { forwardRef, useEffect, useState } from "react";
import userServices from "../../../services/user";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProjectParticipants = (props) => {
  const { classes, listaAdicionados, setListaAdicionados, setInfoProject, tema, setTema } = props;

  const [listaParticipantes, setListaParticipantes] = useState([]);

  useEffect(() => {
    userServices
      .listarUsuarios("Participante")
      .then((res) => setListaParticipantes(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  const [atual, setAtual] = useState({
    usuNome: "",
    usuEmail: "",
    usuTelefone: "",
    usuAreaEmpresa: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [checkeds, setCheckeds] = useState([]);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  // Verifica se o participante já existe na lista de adicionados
  const existeParticipante = (novo) => {
    let existe = false;

    for (let i = 0; i < listaAdicionados.length; i++) {
      const each = listaAdicionados[i];
      if (each.usuNome === novo.usuNome && each.usuEmail === novo.usuEmail) {
        existe = true;
        break;
      }
    }

    return existe;
  };

  // Rastreia o participante atualmente escolhido
  const pegarParticipante = (participante) => {
    setAtual(
      participante
        ? participante
        : {
            usuNome: "",
            usuEmail: "",
            usuTelefone: "",
            usuAreaEmpresa: "",
          }
    );
  };

  // Adicionar o participante escolhido na lista, limpar os inputs ao adicionar
  const adicionarParticipante = (novo) => {
    const existe = existeParticipante(novo);
    // Verifica se não é um objeto vazio
    const temNome = Object.values(novo)[0].length;
    if (!existe && temNome) {
      setAtual({
        usuNome: "",
        usuEmail: "",
        usuTelefone: "",
        usuAreaEmpresa: "",
      });
      setListaAdicionados([...listaAdicionados, novo]);
      setInfoProject([...listaAdicionados, novo]);

      // Limpa o campo "Participante"
      document.querySelector(".MuiAutocomplete-clearIndicator").click();
    }
  };

  // Alterna entre os estados "Open" e "Close" da lista
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Pega o value dos checkbox marcados e coloca em ordem decrescente
  const pegarCheckbox = (value) => {
    if (!checkeds.includes(value)) {
      const novoArray = [...checkeds, value].sort((a, b) => {
        return b - a;
      });
      setCheckeds(novoArray);
    } else {
      const novoArray = checkeds
        .filter((num) => num !== value)
        .sort((a, b) => {
          return b - a;
        });
      setCheckeds(novoArray);
    }
  };

  const handleDelete = () => {
    if (checkeds.length) {
      let newArray = [...listaAdicionados];
      checkeds.forEach((value) => {
        newArray.splice(value, 1);
      });
      setListaAdicionados(newArray);
      setInfoProject(newArray);
      document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
        if (checkbox.checked) {
          checkbox.click();
        }
      });
      setCheckeds([]);
    }
  };

  return (
    <Container>
      <Grid container className={classes.grid} style={{ paddingBottom: 0, paddingRight: 0 }}>
        <Grid item xs={12} sm={12} style={{ padding: "0px 25px" }}>
          <Grid
            container
            justify={windowSize >= 960 ? "flex-start" : "center"}
            alignItems="center"
            style={{ marginBottom: 30, paddingTop: 20 }}
          >
            <FormLabel className={classes.normalText} style={{ marginRight: 15 }}>
              Projeto*
            </FormLabel>
            <Grid item xs={12} sm={5} md={4}>
              <Input
                className={classes.textField}
                id="temaProjeto"
                value={tema}
                onChange={(e) => setTema(e.target.value)}
                disableUnderline
                required
              />
            </Grid>
          </Grid>
          <ParticipantsRow
            adicionarParticipante={adicionarParticipante}
            listaParticipantes={listaParticipantes}
            setListaParticipantes={setListaParticipantes}
            pegarParticipante={pegarParticipante}
            atual={atual}
          />
        </Grid>
        <Grid container justify="center" alignItems="center" style={{ paddingTop: 10 }}>
          <Grid item xs={7}>
            <Grid container justify="center">
              <Button variant="contained" color="secondary" onClick={handleClick}>
                Lista de participantes
              </Button>
              <Dialog open={isOpen} TransitionComponent={Transition} keepMounted onClose={handleClick}>
                <DialogTitle>Lista de participantes</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    {listaAdicionados.length !== 0 &&
                      listaAdicionados.map((dados, index) => {
                        return (
                          <Accordion key={index}>
                            <AccordionSummary expandIcon={<ExpandMore />}>
                              <FormControlLabel
                                control={<Checkbox onChange={(e) => pegarCheckbox(e.target.value)} value={index} />}
                                label={dados.usuNome}
                                onClick={(event) => event.stopPropagation()}
                                onFocus={(event) => event.stopPropagation()}
                              />
                            </AccordionSummary>
                            <AccordionDetails>
                              <Grid container justify="space-between" className="light">
                                <Grid item>
                                  <Typography style={{ padding: 10 }}>{dados.usuAreaEmpresa}</Typography>
                                </Grid>
                                <Grid item>
                                  <Typography style={{ padding: 10 }}>{dados.usuTelefone}</Typography>
                                </Grid>
                                <Grid item>
                                  <Typography style={{ padding: 10 }}>{dados.usuEmail}</Typography>
                                </Grid>
                              </Grid>
                            </AccordionDetails>
                          </Accordion>
                        );
                      })}
                  </DialogContentText>
                </DialogContent>
                <Grid container justify="flex-end">
                  <Grid item>
                    <DialogActions>
                      <Button onClick={handleDelete} color="secondary" variant="contained">
                        <Delete />
                        Remover
                      </Button>
                    </DialogActions>
                  </Grid>
                  <Grid item>
                    <DialogActions>
                      <Button onClick={handleClick} color="secondary" variant="contained">
                        <Cancel />
                        Fechar
                      </Button>
                    </DialogActions>
                  </Grid>
                </Grid>
              </Dialog>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs>
          <Grid container justify="flex-end" alignItems="flex-end" style={{ height: "100%" }}>
            <IconButton className="no-margin" onClick={() => adicionarParticipante(atual)}>
              <AddCircle className="largeIcon" style={{ color: "white" }}></AddCircle>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withStyles(styles, { withTheme: true })(ProjectParticipants);
