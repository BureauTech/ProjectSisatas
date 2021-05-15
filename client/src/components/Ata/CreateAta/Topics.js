import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Divider,
  FormLabel,
  Grid,
  IconButton,
  Input,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import { AddCircle, Delete, ExpandMore } from "@material-ui/icons";
import { Autocomplete } from "@material-ui/lab";
import { useState } from "react";
import { styles } from "../../../assets/styles/Styles";
import "./Components.css";

const Topics = (props) => {
  const { classes, listaAdicionados, setInfoTopics, setIsOpen, setMsgErro, setMsgSucesso, dataInicio } = props;

  const [atual, setAtual] = useState("");
  const [idPessoa, setIdPessoa] = useState("");

  const [assunto, setAssunto] = useState("");
  const [idAtual, setIdAtual] = useState(1);
  const [listaAssuntos, setListaAssuntos] = useState([]);

  const [prazo, setPrazo] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleAddition = () => {
    if (atual && assunto && prazo && idPessoa) {
      const newTopic = {
        assId: idAtual,
        assAssunto: assunto,
        inCharge: atual,
        assPrazo: prazo,
        responsavelAssuntos: [
          {
            usuId: idPessoa,
            usuNome: atual,
          },
        ],
      };
      setListaAssuntos([...listaAssuntos, newTopic]);
      setIdAtual(idAtual + 1);
      setInfoTopics([...listaAssuntos, newTopic]);
    }
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener("resize", handleResize);

  // Rastreia o participante atualmente escolhido
  const getPerson = (person) => {
    if (person) {
      setAtual(person.usuNome);
      setIdPessoa(person.usuId);
    } else {
      setAtual("");
      setIdPessoa("");
    }
  };

  const handleDelete = (id) => {
    let newId = id;
    let newList = [...listaAssuntos];
    newList.splice(id - 1, 1);

    if (newList.length) {
      for (let i = id - 1; i < newList.length; i++) {
        let topic = newList[i];
        topic.id = newId;
        newId = newId + 1;
      }
      setListaAssuntos(newList);
      setInfoTopics(newList);
      newId = newList[newList.length - 1].id + 1;
      setIdAtual(newId);
    } else {
      setIdAtual(1);
      setListaAssuntos([]);
      setInfoTopics([]);
    }
  };

  const setarDataPrazo = (valor, setarValor, dataInicio) => {
    if (dataInicio && valor) {
      const dInicio = dataInicio.split("-");
      const inicio = new Date(`${Number(dInicio[0])}-${Number(dInicio[1])}-${Number(dInicio[2])}`);
      const dPrazo = valor.split("-");
      const prazo = new Date(`${Number(dPrazo[0])}-${Number(dPrazo[1])}-${Number(dPrazo[2])}`);

      if (inicio.getTime() > prazo.getTime()) {
        setarValor("");
        setIsOpen(true);
        setMsgErro("A data do prazo não pode ser menor que a inicial!");
        setMsgSucesso(false);
      } else {
        setarValor(valor);
      }
    } else {
      setarValor(valor);
    }
  };

  const formatDatetime = (date) => {
    const data = date.split("-").reverse().join("/");
    return data;
  };

  const options = listaAdicionados.map((option) => {
    const firstLetter = option.usuNome[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  return (
    <Container>
      <Grid item xs={12}>
        <Grid container className={classes.grid} style={{ padding: 0 }} alignItems="stretch" justify="space-between">
          <Grid container>
            <Grid item xs={11}>
              <Grid
                container
                className={classes.grid}
                style={{ padding: 0 }}
                alignItems="center"
                justify="space-around"
              >
                <Grid item className="no-margin">
                  <Grid container justify="center">
                    <Grid item style={{ margin: 10 }}>
                      <Typography align="center" className={classes.normalText} style={{ textAlign: "center" }}>
                        ID
                      </Typography>
                      <Typography align="center" className={classes.normalText} style={{ textAlign: "center" }}>
                        {idAtual}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={8} xs={12} className="no-margin">
                  <Grid container justify="space-around">
                    {windowWidth >= 960 && (
                      <Divider orientation="vertical" style={{ backgroundColor: "white" }} flexItem />
                    )}
                    <Grid item md={5} sm={10} xs={10} style={{ margin: 10 }}>
                      <Grid container justify="space-around">
                        <FormLabel htmlFor="assunto" className={classes.normalText}>
                          Assunto
                        </FormLabel>
                        <Input
                          className={classes.textField}
                          id="assunto"
                          disableUnderline
                          value={assunto}
                          onChange={(e) => setAssunto(e.target.value)}
                        />
                      </Grid>
                    </Grid>
                    {windowWidth >= 960 && (
                      <Divider orientation="vertical" style={{ backgroundColor: "white" }} flexItem />
                    )}
                    <Grid item md={5} sm={10} xs={10} style={{ margin: 10 }}>
                      <Grid container justify="center">
                        <FormLabel htmlFor="responsavel" className={classes.normalText}>
                          Responsável
                        </FormLabel>
                        <Autocomplete
                          id="responsavel"
                          className="no-margin"
                          style={{ width: "100%" }}
                          options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                          groupBy={(option) => option.firstLetter}
                          getOptionLabel={(option) => option.usuNome}
                          onChange={(e, value) => getPerson(value)}
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
                    {windowWidth >= 960 && (
                      <Divider orientation="vertical" style={{ backgroundColor: "white" }} flexItem />
                    )}
                  </Grid>
                </Grid>
                <Grid item md={3} xs={12} className="no-margin">
                  <Grid container justify="space-around" alignItems="center">
                    <Grid item md={12} sm={10} xs={10} style={{ margin: 10 }}>
                      <Grid container justify="space-around" alignItems="center">
                        <FormLabel htmlFor="prazo" className={classes.normalText}>
                          Prazo
                        </FormLabel>
                        <Input
                          className={classes.textField}
                          disableUnderline
                          id="prazo"
                          type="date"
                          value={prazo}
                          onChange={(e) => setarDataPrazo(e.target.value, setPrazo, dataInicio)}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1}>
              <Grid container justify="flex-end" alignItems="flex-end" style={{ height: "100%" }}>
                <IconButton className="no-margin" onClick={handleAddition}>
                  <AddCircle className="largeIcon" style={{ color: "white" }}></AddCircle>
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {listaAssuntos.length !== 0 && (
          <Grid item xs={11} style={{ margin: 10 }}>
            <Grid container justify="center">
              <Grid item xs={9} sm={9}>
                <Accordion
                  style={{
                    backgroundColor: props.theme.palette.secondary.main,
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Grid container justify="center">
                      <Typography style={{ color: "white", fontSize: "1.5rem" }} className={classes.normalText}>
                        Assuntos adicionados
                      </Typography>
                    </Grid>
                  </AccordionSummary>
                  <Grid container justify="space-around">
                    {listaAssuntos.map((topic, index) => {
                      return (
                        <Grid item xs={8} md={5}>
                          <AccordionDetails key={index + 1} style={{ width: "100%" }}>
                            <Grid item xs={12}>
                              <Accordion style={{ width: "100%" }}>
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                  <Grid container alignItems="center" justify="space-between">
                                    <Grid item xs={3}>
                                      <IconButton
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          handleDelete(index + 1);
                                        }}
                                        onFocus={(e) => e.stopPropagation()}
                                        key={index + 1}
                                        color="secondary"
                                      >
                                        <Delete />
                                      </IconButton>
                                    </Grid>
                                    <Grid item xs>
                                      <Typography style={{ color: "black" }}>
                                        <strong>
                                          {topic.assId} - {topic.assAssunto}
                                        </strong>
                                      </Typography>
                                    </Grid>
                                  </Grid>
                                </AccordionSummary>
                                <AccordionDetails key={index + 1} className="no-margin">
                                  <Grid container justify="center">
                                    <Grid item>
                                      <Typography style={{ padding: 10 }}>
                                        {topic.responsavelAssuntos[0].usuNome}
                                      </Typography>
                                    </Grid>
                                    <Grid item>
                                      <Typography style={{ padding: 10 }}>{formatDatetime(topic.assPrazo)}</Typography>
                                    </Grid>
                                  </Grid>
                                </AccordionDetails>
                              </Accordion>
                            </Grid>
                          </AccordionDetails>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Accordion>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default withStyles(styles, { withTheme: true })(Topics);
