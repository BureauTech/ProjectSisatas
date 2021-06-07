import { Grid, Paper, Typography } from "@material-ui/core";

/**
 * @author Denis Lima
 * @param {any} props 
 * @returns Componente de cabeçalho no modelo de Ata em PDF
 */
const AtaHeader = (props) => {
  const { id, data, inicio, fim, local, logo } = props.dados;

  return (
    <Grid container className="header-print" alignItems="center">
      <Grid item xs={3}>
        <Paper className="header-content hd1" square elevation="0">
          <Grid container justify="center" alignItems="center" style={{ height: 93 }}>
            <Typography>
              <strong>ATA Nº.: </strong>
              {id}
            </Typography>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={7}>
        <Paper className="header-content hd1" square elevation="0">
          <Grid container justify="flex-start" style={{ padding: 10 }}>
            <Typography>
              <strong>Data:</strong> {data}
            </Typography>
            <Grid>
              <Typography display="inline" style={{ marginRight: 45 }}>
                <strong>Início:</strong> {inicio}
              </Typography>
              <Typography display="inline">
                <strong>Fim:</strong> {fim}
              </Typography>
            </Grid>
            <Grid container>
              <Typography>
                <strong>Local:</strong> {local}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper className="header-content" square elevation="0">
          <Grid container alignItems="center" justify="center" style={{ padding: 2, height: "100%" }}>
            <img src={logo} alt="logo bureau tech" style={{ maxWidth: "2cm", maxHeight: "2cm" }} />
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AtaHeader;
