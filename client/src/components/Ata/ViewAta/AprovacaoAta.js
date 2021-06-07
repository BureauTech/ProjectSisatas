import { Container, Grid, withStyles, Button, useTheme } from "@material-ui/core";
import "./Components.css";
import { styles } from "../../../assets/styles/Styles";
import { useHistory } from "react-router-dom";
import { useAutenticacao } from "../../../context/Autenticacao";

/**
 * @author Beatriz Coutinho
 * @param {any} params
 * @returns Listagem de atas cadastradas
 *
 * Listagem de atas cadastradas no banco.
 *
 * O token precisa ser validado com o servidor para garantir que o mesmo é válido e único.
 */

const AprovacaoAta = (props) => {
  const { estado, cadastrarAprovacaoAta, ataId, ataDataInicio } = props;
  const classes = useTheme();
  const history = useHistory();
  const { usuario } = useAutenticacao()

  return (
    <Container>
      <Grid container className={classes.grid} style={{ paddingBottom: 15, padding: "0px 25px 15px" }}>
        <Grid item xs={12}>
          <Grid container justify="space-around" alignItems="center" style={{ paddingTop: 20 }}>
            {estado !== "Pendente" && (
              <Grid item className="inputsGrid">
                <Button
                  variant="contained"
                  className="bold"
                  style={{
                    backgroundColor: estado === "Aprovado" ? "#32C95E" : "#FB4A3F",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "1.5rem",
                    borderRadius: 16,
                    padding: "0 5px",
                  }}
                  disabled
                >
                  {estado}
                </Button>
              </Grid>
            )}
            {estado === "Pendente" && (
              <>
                <Grid item className="inputsGrid">
                  <Button
                    variant="contained"
                    className="bold"
                    style={{
                      backgroundColor: "#32C95E",
                      color: "white",
                      fontWeight: 700,
                      fontSize: "1.5rem",
                      borderRadius: 16,
                      padding: "0 5px",
                    }}
                    onClick={() => cadastrarAprovacaoAta('Aprovado')}
                  >
                    Aprovar
                  </Button>
                </Grid>
                <Grid item className="inputsGrid">
                  <Button
                    variant="contained"
                    className="bold"
                    style={{
                      backgroundColor: "#FB4A3F",
                      color: "white",
                      fontWeight: 700,
                      fontSize: "1.5rem",
                      borderRadius: 16,
                      padding: "0 5px",
                    }}
                    // onClick={() => history.push("nova-revisao", { user: 1, ataid: idAta, ataDataInicio: infoAta.header.ataDataInicio })}
                    onClick={() =>
                      history.push("nova-revisao", { ataid: ataId, ataDataInicio: ataDataInicio, cadastrarAprovacaoAta: true })
                    }
                  >
                    Recusar
                  </Button>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withStyles(styles, { withTheme: true })(AprovacaoAta);
