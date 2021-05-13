import { Container, Grid, TextareaAutosize, Typography, withStyles } from "@material-ui/core";
import { styles } from "../../assets/styles/Styles";
import ResponsibleItem from "./Items";

const ViewSubjectsComponent = (props) => {
  const { classes, assunto } = props;

  return (
    <Container style={{ marginTop: 40, marginBottom: 40 }}>
      <Grid container>
        <Grid container className={classes.grid} style={{ padding: "20px 10px" }}>
          <ResponsibleItem text1={"Responsável"} text2={assunto.responsavel} xs1={6} />
          <ResponsibleItem text1={"Ata Ref."} text2={assunto.ataRef} xs1={6} xs={3} />
          <ResponsibleItem text1={"Criado em"} text2={assunto.data} xs1={6} />
          <ResponsibleItem text1={"Prazo"} text2={assunto.prazo} xs1={6} xs={4} />
          <Typography className={classes.normalText} style={{ paddingTop: 10, fontSize: "1.5rem", margin: "0px 25px" }}>
            Assunto
          </Typography>
          <TextareaAutosize
            disabled
            rowsMax={15}
            id="pauta"
            value={assunto.assunto}
            style={{
              width: "100%",
              fontSize: "1.8rem",
              borderRadius: "20px",
              color: "white",
              paddingLeft: 10,
              paddingBottom: 20,
              margin: "15px 25px 0px",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default withStyles(styles, { withTheme: true })(ViewSubjectsComponent);
