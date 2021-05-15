import { Container, Grid, withStyles, Typography, FormLabel, IconButton, Icon } from "@material-ui/core";
import "./Components.css";
import { styles } from "../../../assets/styles/Styles";
import excel from "../../../assets/images/svg/excel.svg";
import pdf from "../../../assets/images/svg/pdf.svg";
import downloadServices from "../../../services/download";

// Alterando css de componentes

const AtaHeader = (props) => {
  const { classes, header, ajustarLayout } = props;

  const printPDF = () => {
    ajustarLayout("0");
    window.onafterprint = (e) => ajustarLayout();
    window.print();
  };

  const downloadExcel = () => {
    const id = header.ataId.split("/")[0];
    const ano = header.ataId.split("/")[1];
    downloadServices.excel(id, ano);
  };

  return (
    <Container>
      <Grid container>
        <Grid container className={classes.grid} alignItems="center" justify="space-evenly">
          {/* LATERAL ESQUERDA (NÚMERO DA ATA)*/}
          <Grid item sm={10} md={3} lg={3}>
            <Grid container justify="center">
              <Grid container justify="center">
                <Typography className={classes.biggerText}>ATA Nº:</Typography>
              </Grid>
              <Grid container justify="center">
                <Typography className={classes.biggerText}>{header.ataId}</Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* CONTEINER DA DIREITA (Informações data e local)*/}
          <Grid item xs={12} sm={10} md={7}>
            <Grid item xs={11} md={10} lg={10}>
              {/* ROW DATA INÍCIO */}
              <Grid container className={classes.rowMargin}>
                <Grid item md={4}>
                  <FormLabel className={classes.normalText}>Data Início:</FormLabel>
                </Grid>
                <Grid item xs={12} md={8} lg={7}>
                  <Grid container justify="space-between">
                    <Grid item xs={7} md={6} lg={5}>
                      <Typography
                        className={classes.normalText}
                        style={{
                          paddingRight: 20,
                          color: "white",
                        }}
                      >
                        <strong>{header.ataDataInicio}</strong>
                      </Typography>
                    </Grid>
                    <Grid xs={4} md={5}>
                      <Typography
                        className={classes.normalText}
                        style={{
                          paddingRight: 20,
                          color: "white",
                        }}
                      >
                        <strong>{header.ataHoraInicio}</strong>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* ROW DATA FINAL */}
              <Grid container className={classes.rowMargin}>
                <Grid item md={4}>
                  <FormLabel className={classes.normalText}>Data Final:</FormLabel>
                </Grid>
                <Grid item xs={12} md={8} lg={7}>
                  <Grid container justify="space-between">
                    <Grid item xs={7} md={6} lg={5}>
                      <Typography
                        className={classes.normalText}
                        style={{
                          paddingRight: 20,
                          color: "white",
                        }}
                      >
                        <strong>{header.ataDataFim}</strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={4} md={5}>
                      <Typography
                        className={classes.normalText}
                        style={{
                          paddingRight: 20,
                          color: "white",
                        }}
                      >
                        <strong>{header.ataHoraFim}</strong>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              {/* ROW LOCAL */}
              <Grid container className={classes.rowMargin}>
                <Grid item xs={10} md={2} lg={2}>
                  <FormLabel className={classes.normalText}>Local:</FormLabel>
                </Grid>
                <Grid item xs={12} md={10} lg={8}>
                  <Typography
                    className={classes.normalText}
                    style={{
                      paddingRight: 20,
                      color: "white",
                    }}
                  >
                    <strong>{header.ataLocal}</strong>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={10} md={2}>
            <Grid container justify="flex-end">
              <Grid item xs={6}>
                <IconButton onClick={() => downloadExcel()}>
                  <Icon className="largeIcon">
                    <img alt="Excel export" src={excel} style={{ width: 40, height: 40 }} />
                  </Icon>
                </IconButton>
              </Grid>
              <Grid item xs={6}>
                <IconButton onClick={() => printPDF()}>
                  <Icon className="largeIcon">
                    <img alt="PDF export" src={pdf} style={{ width: 40, height: 40 }} />
                  </Icon>
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withStyles(styles, { withTheme: true })(AtaHeader);
