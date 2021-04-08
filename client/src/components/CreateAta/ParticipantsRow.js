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
import { forwardRef, useState } from "react";
import { styles } from "../../assets/styles/Styles";
import "./Components.css";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ParticipantsRow = (props) => {
  const { classes } = props;

  const [listaParticipantes, setListaParticipantes] = useState([
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
  ]);

  const [listaAdicionados, setListaAdicionados] = useState([]);
  const [atual, setAtual] = useState({
    nome: "",
    email: "",
    telefone: "",
    area: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [checkeds, setCheckeds] = useState([]);

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
      document
        .querySelectorAll('input[type="checkbox"]')
        .forEach((checkbox) => {
          if (checkbox.checked) {
            checkbox.click();
          }
        });
      setCheckeds([]);
    }
  };

  // Verifica se o participante já existe na lista de adicionados
  const existeParticipante = (novo) => {
    let existe = false;

    for (let i = 0; i < listaAdicionados.length; i++) {
      const each = listaAdicionados[i];
      if (each.nome === novo.nome && each.email === novo.email) {
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
            nome: "",
            email: "",
            telefone: "",
            area: "",
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
        nome: "",
        email: "",
        telefone: "",
        area: "",
      });
      setListaAdicionados([...listaAdicionados, novo]);

      // Limpa o campo "Participante"
      document.querySelector(".MuiAutocomplete-clearIndicator").click();
    }
  };

  // Alterna entre os estados "Open" e "Close" da lista
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // ORDERNAR A LISTA DE PARTICIPANTES EM ORDEM ALFABÉTICA, SEPARADO EM GRUPOS NO SELECT/AUTOCOMPLETE
  const options = listaParticipantes.map((option) => {
    const firstLetter = option.nome[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  return (
    <Grid item xs={12}>
      <Grid container justify="flex-start">
        {/* INPUT - PARTICIPANTE */}
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
              onChange={(e, value) => pegarParticipante(value)}
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
        {/* INPUT - AREA */}
        <Grid item xs={12} sm={5} md={3} className="inputsGrid">
          <FormLabel className={classes.normalText}>Área</FormLabel>
          <Grid item md={11}>
            <Input
              className={classes.textField}
              value={atual.area}
              disableUnderline
            />
          </Grid>
        </Grid>
        {/* INPUT - TELEFONE */}
        <Grid item xs={12} sm={5} md={3} className="inputsGrid">
          <FormLabel className={classes.normalText}>Telefone</FormLabel>
          <Grid item md={11}>
            <Input
              className={classes.textField}
              value={atual.telefone}
              disableUnderline
            />
          </Grid>
        </Grid>
        {/* INPUT - EMAIL */}
        <Grid item xs={12} sm={5} md={3} className="inputsGrid">
          <FormLabel className={classes.normalText}>E-mail</FormLabel>
          <Grid item md={11}>
            <Input
              className={classes.textField}
              value={atual.email}
              disableUnderline
            />
          </Grid>
        </Grid>
        <Grid container justify="flex-end">
          <IconButton onClick={() => adicionarParticipante(atual)}>
            <AddCircle className="largeIcon" />
          </IconButton>
        </Grid>
        <Grid container justify="center">
          <Button variant="contained" color="secondary" onClick={handleClick}>
            Lista de participantes
          </Button>
          <Dialog
            open={isOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClick}
          >
            <DialogTitle>Lista de participantes</DialogTitle>
            <DialogContent>
              <DialogContentText>
                {listaAdicionados.length !== 0 &&
                  listaAdicionados.map((dados, index) => {
                    return (
                      <Accordion key={index}>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                onChange={(e) => pegarCheckbox(e.target.value)}
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
                    onClick={handleDelete}
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
                    onClick={handleClick}
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
};

export default withStyles(styles, { withTheme: true })(ParticipantsRow);
