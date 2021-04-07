import {
  FormLabel,
  Grid,
  IconButton,
  Input,
  TextField,
  withStyles,
} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { Autocomplete } from "@material-ui/lab";
import { Component } from "react";
import { styles } from "../../assets/styles/Styles";

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
      atual: {},
    };
  }

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
    this.setState({
      listaAdicionados: [...this.state.listaAdicionados, novo],
    });
    console.log(this.state.listaAdicionados);
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
            <IconButton>
              <AddCircle className="largeIcon" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ParticipantsRow);
