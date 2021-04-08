import {
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
  FormLabel,
  Grid,
  IconButton,
  Input,
  Slide,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import { AddCircle, Cancel, Delete, ExpandMore } from "@material-ui/icons";
import { Autocomplete } from "@material-ui/lab";
import { Component, forwardRef } from "react";
import { styles } from "../../assets/styles/Styles";
import "./Components.css";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class ParticipantsRow extends Component {
  constructor() {
    super();
    this.state = {
      listaParticipantes: [
        {
          nome: "Denis Lima",
          area: "Dev",
          telefone: "12 123456789",
          email: "denis@bureautech.com",
        },
        {
          nome: "Charles Ferreira",
          area: "PO",
          telefone: "12 123456439",
          email: "charles@bureautech.com",
        },
        {
          nome: "Bia Coutinho",
          area: "Dev",
          telefone: "12 1267796789",
          email: "bia@bureautech.com",
        },
      ],
      listaAdicionados: [],
      atual: {
        nome: "",
        email: "",
        telefone: "",
        area: "",
      },
      isOpen: false,
    };
  }
  existeParticipante = (novo) => {
    let existe = false;
    console.log(novo);

    // se não
    // if (!novo || Object.values(novo)[0].length) {
    //   return existe;
    // }

    for (let i = 0; i < this.state.listaAdicionados.length; i++) {
      const each = this.state.listaAdicionados[i];
      if (each.nome === novo.nome && each.email === novo.email) {
        console.log("Igual");
        existe = true;
        break;
      }
    }

    return existe;
  };

  pegarParticipante = (participante) => {
    this.setState({
      atual: participante
        ? participante
        : {
            nome: "",
            email: "",
            telefone: "",
            area: "",
          },
    });
  };

  adicionarParticipante = (novo) => {
    const existe = this.existeParticipante(novo);
    const temNome = Object.values(novo)[0].length;
    if (!existe && temNome) {
      this.setState({
        listaAdicionados: [...this.state.listaAdicionados, novo],
        atual: {
          nome: "",
          email: "",
          telefone: "",
          area: "",
        },
      });
      document.querySelector(".MuiAutocomplete-clearIndicator").click();
    }
  };

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { classes } = this.props;

    // ORDERNAR A LISTA DE PARTICIPANTES EM ORDEM ALFABÉTICA, SEPARADO EM GRUPOS NO SELECT/AUTOCOMPLETE
    const options = this.state.listaParticipantes.map((option) => {
      const firstLetter = option.nome[0].toUpperCase();
      return {
        firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
        ...option,
      };
    });

    return (
      <Grid item xs={12}>
        <Grid container justify="flex-start">
          <Grid item xs={12} sm={5} md={3} className="inputsGrid">
            <FormLabel htmlFor="participante" className={classes.normalText}>
              Participante
            </FormLabel>
            <Grid item md={11}>
              <Autocomplete
                id="participante"
                className="no-margin"
                style={{ width: "100%" }}
                options={options.sort(
                  (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
                )}
                groupBy={(option) => option.firstLetter}
                getOptionLabel={(option) => option.nome}
                onChange={(e, value) => this.pegarParticipante(value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    className={classes.textField}
                    style={{ padding: 0 }}
                    name="participante"
                    disableUnderline
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={5} md={3} className="inputsGrid">
            <FormLabel className={classes.normalText}>Área</FormLabel>
            <Grid item md={11}>
              <Input
                className={classes.textField}
                value={this.state.atual.area}
                disableUnderline
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={5} md={3} className="inputsGrid">
            <FormLabel className={classes.normalText}>Telefone</FormLabel>
            <Grid item md={11}>
              <Input
                className={classes.textField}
                value={this.state.atual.telefone}
                disableUnderline
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={5} md={3} className="inputsGrid">
            <FormLabel className={classes.normalText}>E-mail</FormLabel>
            <Grid item md={11}>
              <Input
                className={classes.textField}
                value={this.state.atual.email}
                disableUnderline
              />
            </Grid>
          </Grid>
          <Grid container justify="flex-end">
            <IconButton
              onClick={() => this.adicionarParticipante(this.state.atual)}
            >
              <AddCircle className="largeIcon" />
            </IconButton>
          </Grid>
          <Grid container justify="center">
            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleClick}
            >
              Lista de participantes
            </Button>
            <Dialog
              open={this.state.isOpen}
              TransitionComponent={Transition}
              keepMounted
              onClose={this.handleClick}
            >
              <DialogTitle>Lista de participantes</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  {this.state.listaAdicionados.length !== 0 &&
                    this.state.listaAdicionados.map((dados, index) => {
                      console.log(dados, index);
                      return (
                        <Accordion key={index}>
                          <AccordionSummary expandIcon={<ExpandMore />}>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  onChange={(e) =>
                                    console.log(e.target.checked)
                                  }
                                  value={index}
                                />
                              }
                              label={dados.nome}
                              onClick={(event) => event.stopPropagation()}
                              onFocus={(event) => event.stopPropagation()}
                            />
                          </AccordionSummary>
                          <AccordionDetails>
                            <Grid
                              container
                              justify="space-between"
                              className="light"
                            >
                              <Grid item>
                                <Typography style={{ padding: 10 }}>
                                  {dados.area}
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography style={{ padding: 10 }}>
                                  {dados.telefone}
                                </Typography>
                              </Grid>
                              <Grid item>
                                <Typography style={{ padding: 10 }}>
                                  {dados.email}
                                </Typography>
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
                    <Button
                      onClick={this.handleClick}
                      color="secondary"
                      variant="contained"
                    >
                      <Delete />
                      Remover
                    </Button>
                  </DialogActions>
                </Grid>
                <Grid item>
                  <DialogActions>
                    <Button
                      onClick={this.handleClick}
                      color="secondary"
                      variant="contained"
                    >
                      <Cancel />
                      Fechar
                    </Button>
                  </DialogActions>
                </Grid>
              </Grid>
            </Dialog>
          </Grid>
          <Grid></Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ParticipantsRow);
