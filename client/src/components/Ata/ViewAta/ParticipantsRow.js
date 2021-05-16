import { FormLabel, Grid, Typography, withStyles } from "@material-ui/core";
import { styles } from "../../../assets/styles/Styles";
import "./Components.css";

const ParticipantsRow = (props) => {
  const { classes, listaParticipantes } = props;

  return (
    <Grid item xs={12}>
      <Grid container justify="flex-start">
        <Grid item xs={12} sm={5} md={3} className="inputsGrid">
          <FormLabel htmlFor="participante" className={classes.normalText}>
            Participante
          </FormLabel>
        </Grid>
        <Grid item xs={12} sm={5} md={3} className="inputsGrid">
          <FormLabel className={classes.normalText}>Área</FormLabel>
        </Grid>
        <Grid item xs={12} sm={5} md={2} className="inputsGrid">
          <FormLabel className={classes.normalText}>Telefone</FormLabel>
        </Grid>
        <Grid item xs={12} sm={5} md={4} className="inputsGrid">
          <FormLabel className={classes.normalText}>Email</FormLabel>
        </Grid>
      </Grid>
      {listaParticipantes &&
        listaParticipantes.map((participante) => (
          <Grid container justify="flex-start" className={classes.hoverSecondary}>
            {/* INPUT - PARTICIPANTE */}
            <Grid item xs={12} sm={5} md={3} className="inputsGrid">
              <Grid item md={11}>
                <Typography
                  id="participante"
                  className={classes.normalText}
                  style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                >
                  {participante.usuNome}
                </Typography>
              </Grid>
            </Grid>
            {/* INPUT - AREA */}
            <Grid item xs={12} sm={5} md={3} className="inputsGrid">
              <Grid item md={11}>
                <Typography id="area" className={classes.normalText} style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  {participante.usuAreaEmpresa}
                </Typography>
              </Grid>
            </Grid>
            {/* INPUT - TELEFONE */}
            <Grid item xs={12} sm={5} md={2} className="inputsGrid">
              <Grid item md={11}>
                <Typography
                  id="telefone"
                  className={classes.normalText}
                  style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                >
                  {participante.usuTelefone}
                </Typography>
              </Grid>
            </Grid>
            {/* INPUT - EMAIL */}
            <Grid item xs={12} sm={5} md={4} className="inputsGrid">
              <Grid item md={11}>
                <Typography
                  id="email"
                  className={classes.normalText}
                  style={{ fontWeight: "bold", fontSize: "1.2rem" }}
                >
                  {participante.usuEmail}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
    </Grid>
  );
};

export default withStyles(styles, { withTheme: true })(ParticipantsRow);
