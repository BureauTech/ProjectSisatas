import { Container, Grid, withStyles, FormLabel, Input } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./Components.css";
import { styles } from "../../../assets/styles/Styles";

/**
 * @author Denis Lima
 * @param {any} props 
 * @returns Componente para o cabeçalho da criação da Ata
 */
const AtaHeader = (props) => {
  const { classes, setInfoHeader, setIsOpen, setMsgErro, setMsgSucesso } = props;
  const [dtInicio, setDtInicio] = useState("");
  const [hrInicio, setHrInicio] = useState("");
  const [dtFinal, setDtFinal] = useState("");
  const [hrFinal, setHrFinal] = useState("");
  const [local, setLocal] = useState("");

  useEffect(() => {
    setInfoHeader({
      //id: id,
      ataDataInicio: dtInicio ? dtInicio : "",
      ataHoraInicio: hrInicio ? hrInicio : "",
      ataDataFim: dtFinal ? dtFinal : "",
      ataHoraFim: hrFinal ? hrFinal : "",
      ataLocal: local ? local : "",
      geraAtas: {
        usuId: 1,
      },
    });
  }, [dtFinal, dtInicio, hrFinal, hrInicio, local, setInfoHeader]);

  /**
   * Verifica se a data Final é menor que a data Inicial,  
   * caso seja, devolve uma mensagem para o usuário,  
   * caso contrário, seta a Data Final
   * @author Denis Lima
   * @param {Number} valor Valor de data selecionada pelo usuário 
   * @param {Function} setarValor Função que seta o valor anterior (setState)
   * @param {Number} dataInicio Data de ínicio
   */
  const setarDataFinal = (valor, setarValor, dataInicio) => {
    if (dataInicio && valor) {
      const dInicio = dataInicio.split("-");
      const inicio = new Date(`${Number(dInicio[0])}-${Number(dInicio[1])}-${Number(dInicio[2])}`);
      const dFinal = valor.split("-");
      const final = new Date(`${Number(dFinal[0])}-${Number(dFinal[1])}-${Number(dFinal[2])}`);

      if (inicio.getTime() > final.getTime()) {
        setarValor("");
        setIsOpen(true);
        setMsgErro("A data final não pode ser menor que a inicial!");
        setMsgSucesso(false);
      } else {
        setarValor(valor);
      }
    } else {
      setarValor(valor);
    }
  };

   /**
   * Verifica se a data Final é menor que a data Inicial,  
   * caso seja, devolve uma mensagem para o usuário,  
   * caso contrário, seta a Data Incial
   * @author Denis Lima
   * @param {Number} valor Valor de data selecionada pelo usuário 
   * @param {Function} setarValor Função que seta o valor anterior (setState)
   * @param {Number} dataInicio Data de Fim
   */
  const setarDataInicio = (valor, setarValor, dataFinal) => {
    if (dataFinal && valor) {
      const dInicio = valor.split("-");
      const inicio = new Date(`${Number(dInicio[0])}-${Number(dInicio[1])}-${Number(dInicio[2])}`);
      const dFinal = dataFinal.split("-");
      const final = new Date(`${Number(dFinal[0])}-${Number(dFinal[1])}-${Number(dFinal[2])}`);

      if (inicio.getTime() > final.getTime()) {
        setarValor("");
        setIsOpen(true);
        setMsgErro("A data final não pode ser menor que a inicial!");
        setMsgSucesso(false);
      } else {
        setarValor(valor);
      }
    } else {
      setarValor(valor);
    }
  };

  return (
    <Container>
      <Grid container>
        <Grid container className={classes.grid} alignItems="center" justify="center" style={{ padding: 15 }}>
          <Grid item xs={12} sm={10} md={10} lg={10}>
            {/* ROW DATA INÍCIO */}
            <Grid container justify="center" style={{ marginBottom: 10 }}>
              <Grid item md={4} lg={3}>
                <FormLabel className={classes.normalText}>Data Início*</FormLabel>
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
                      onChange={(e) => setarDataInicio(e.target.value, setDtInicio, dtFinal)}
                      required
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
                      required
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* ROW DATA FINAL */}
            <Grid container justify="center" style={{ marginBottom: 10 }}>
              <Grid item md={4} lg={3}>
                <FormLabel className={classes.normalText}>Data Final*</FormLabel>
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
                      onChange={(e) => setarDataFinal(e.target.value, setDtFinal, dtInicio)}
                      required
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
                      required
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* ROW LOCAL */}
            <Grid container justify="center" style={{ marginBottom: 10 }}>
              <Grid item xs={10} md={2} lg={2}>
                <FormLabel className={classes.normalText}>Local*</FormLabel>
              </Grid>
              <Grid item xs={12} md={10} lg={8}>
                <Input
                  className={classes.textField}
                  id="local"
                  disableUnderline
                  type="text"
                  value={local}
                  onChange={(e) => setLocal(e.target.value)}
                  required
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
