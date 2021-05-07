import { Container, Grid, withStyles, Typography, FormLabel, Input } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./Components.css";
import { styles } from "../../../assets/styles/Styles";

// Alterando css de componentes

const AtaHeader = (props) => {
  const { classes, ata, setInfoHeader } = props;

  // recebe último ID do banco e soma 1
  const somarIdAta = (id) => {
    let parte1 = id.split("/")[0];
    const parte2 = id.split("/")[1];
    parte1 = (Number(parte1) + 1).toString();
    if (parte1.length === 1) parte1 = "0" + parte1;
    return parte1 + "/" + parte2;
  };

  const [id, setId] = useState(ata.id);
  const [dtInicio, setDtInicio] = useState();
  const [hrInicio, setHrInicio] = useState();
  const [dtFinal, setDtFinal] = useState();
  const [hrFinal, setHrFinal] = useState();
  const [local, setLocal] = useState();

  useEffect(() => {
    setInfoHeader({
      id: id,
      dtInicio: dtInicio,
      hrInicio: hrInicio,
      dtFinal: dtFinal,
      hrFinal: hrFinal,
      local: local,
    });
  }, [dtFinal, dtInicio, hrFinal, hrInicio, id, local, setInfoHeader]);

  useEffect(() => {
    setId(somarIdAta(ata.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Grid container>
        <Grid container className={classes.grid} alignItems="center" justify="center" style={{ padding: 15 }}>
          {/* LATERAL ESQUERDA (NÚMERO DA ATA)*/}
          {/* <Grid item sm={10} md={3} lg={3}>
            <Grid container justify="center">
              <Grid container justify="center">
                <Typography className={classes.biggerText}>ATA Nº:</Typography>
              </Grid>
              <Grid container justify="center">
                <Typography className={classes.biggerText}>{id}</Typography>
              </Grid>
            </Grid>
          </Grid> */}
          {/* CONTEINER DA DIREITA (INPUTS)*/}
          <Grid item xs={11} sm={10} md={9} lg={9}>
            {/* <Grid item xs={11} md={11} lg={10}> */}
            {/* ROW DATA INÍCIO */}
            <Grid container className={classes.rowMargin}>
              <Grid item md={4} lg={3}>
                <FormLabel className={classes.normalText}>Data Início</FormLabel>
              </Grid>
              <Grid item xs={12} md={8} lg={7}>
                <Grid container justify="space-between">
                  <Grid item xs={7} md={6} lg={5}>
                    <Input
                      className={classes.textField}
                      id="dtInicio"
                      disableUnderline
                      type="date"
                      value={dtInicio}
                      onChange={(e) => setDtInicio(e.target.value)}
                    />
                  </Grid>
                  <Grid xs={4} md={5}>
                    <Input
                      className={classes.textField}
                      id="hrInicio"
                      disableUnderline
                      type="time"
                      value={hrInicio}
                      onChange={(e) => setHrInicio(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* ROW DATA FINAL */}
            <Grid container className={classes.rowMargin}>
              <Grid item md={4} lg={3}>
                <FormLabel className={classes.normalText}>Data Final</FormLabel>
              </Grid>
              <Grid item xs={12} md={8} lg={7}>
                <Grid container justify="space-between">
                  <Grid item xs={7} md={6} lg={5}>
                    <Input
                      className={classes.textField}
                      id="dtFinal"
                      disableUnderline
                      type="date"
                      value={dtFinal}
                      onChange={(e) => setDtFinal(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={4} md={5}>
                    <Input
                      className={classes.textField}
                      id="hrFinal"
                      disableUnderline
                      type="time"
                      value={hrFinal}
                      onChange={(e) => setHrFinal(e.target.value)}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* ROW LOCAL */}
            <Grid container className={classes.rowMargin}>
              <Grid item xs={10} md={2} lg={2}>
                <FormLabel className={classes.normalText}>Local</FormLabel>
              </Grid>
              <Grid item xs={12} md={10} lg={8}>
                <Input
                  className={classes.textField}
                  id="local"
                  disableUnderline
                  type="text"
                  value={local}
                  onChange={(e) => setLocal(e.target.value)}
                />
              </Grid>
            </Grid>
            {/* </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withStyles(styles, { withTheme: true })(AtaHeader);
