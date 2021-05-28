import { FormLabel, Grid, Input, TextField, withStyles } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { styles } from "../../../assets/styles/Styles";
import "./Components.css";

const ParticipantsRow = (props) => {
  const { classes, pegarParticipante, atual, listaParticipantes } = props;

  // ORDERNAR A LISTA DE PARTICIPANTES EM ORDEM ALFABÉTICA, SEPARADO EM GRUPOS NO SELECT/AUTOCOMPLETE
  const options = listaParticipantes.map((option) => {
    const firstLetter = option.usuNome[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  return (
    <Grid item xs={12}>
      <Grid container justify="center">
        {/* INPUT - PARTICIPANTE */}
        <Grid item xs={12} sm={5} md={3} className="inputsGrid">
          <FormLabel htmlFor="participante" className={classes.normalText}>
            Participante*
          </FormLabel>
          <Grid item md={11}>
            <Autocomplete
              id="participante"
              className="no-margin"
              style={{ width: "100%" }}
              options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
              groupBy={(option) => option.firstLetter}
              getOptionLabel={(option) => option.usuNome}
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
          <FormLabel className={classes.normalText}>Área*</FormLabel>
          <Grid item md={11}>
            <Input className={classes.textField} id="usuAreaEmpresa" value={atual.usuAreaEmpresa} disableUnderline />
          </Grid>
        </Grid>
        {/* INPUT - TELEFONE */}
        <Grid item xs={12} sm={5} md={3} className="inputsGrid">
          <FormLabel className={classes.normalText}>Telefone*</FormLabel>
          <Grid item md={11}>
            <Input className={classes.textField} id="usuTelefone" value={atual.usuTelefone} disableUnderline />
          </Grid>
        </Grid>
        {/* INPUT - EMAIL */}
        <Grid item xs={12} sm={5} md={3} className="inputsGrid">
          <FormLabel className={classes.normalText}>E-mail*</FormLabel>
          <Grid item md={11}>
            <Input className={classes.textField} id="usuEmail" value={atual.usuEmail} disableUnderline />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles, { withTheme: true })(ParticipantsRow);
