import { Container, Grid, Typography } from "@material-ui/core";

const Assinaturas = (props) => {
  const { listaParticipantes } = props.dados;
  return (
    <Container style={{ marginTop: "2cm", padding: 0 }}>
      <Grid container justify="flex-start">
        {listaParticipantes.map((participante) => (
          <Container style={{ padding: 0, marginBottom: "0.7cm" }}>
            <Grid container justify="flex-start" style={{ marginBottom: 15 }}>
              <Typography>Representante: {participante.area}</Typography>
            </Grid>
            <Grid container justify="flex-start" style={{ paddingTop: 20 }}>
              {participante.assinatura && (
                <img
                  src={participante.assinatura}
                  alt="Assinatura"
                  style={{ maxHeight: "1.5cm", borderBottom: "1px solid black" }}
                />
              )}
              {!participante.assinatura && <div className="space black"></div>}
            </Grid>
            <Grid container justify="flex-start" style={{ marginBottom: 30 }}>
              <Typography>
                Nome: {participante.cargo} - {participante.nome}
              </Typography>
            </Grid>
          </Container>
        ))}
      </Grid>
    </Container>
  );
};

export default Assinaturas;
