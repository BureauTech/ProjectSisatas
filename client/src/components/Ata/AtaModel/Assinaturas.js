import { Container, Grid, Typography } from "@material-ui/core";

/**
 * @author Denis Lima
 * @param {any} props 
 * @returns Componente para assinaturas no modelo de Ata em PDF
 */
const Assinaturas = (props) => {
  const { listaParticipantes } = props.dados;

  return (
    <Container style={{ marginTop: "2cm", padding: 0 }}>
      <Grid container justify="flex-start">
        {listaParticipantes.map((participante) => (
          <Container style={{ padding: 0, marginBottom: "0.7cm" }}>
            <Grid container justify="flex-start" style={{ marginBottom: 15 }}>
              <Typography>Representante: {participante.usuAreaEmpresa}</Typography>
            </Grid>
            <Grid container justify="flex-start" style={{ paddingTop: 20 }}>
              {false && (
                <img
                  src={"data:image/png;base64," + participante.usuAssinatura}
                  alt="Assinatura"
                  style={{ maxHeight: "1.5cm" }}
                />
              )}
              {true && <div className="space black"></div>}
            </Grid>
            <Grid container justify="flex-start" style={{ marginBottom: 30 }}>
              <Typography>
                Nome: {participante.usuCargo} - {participante.usuNome}
              </Typography>
            </Grid>
          </Container>
        ))}
      </Grid>
    </Container>
  );
};

export default Assinaturas;
