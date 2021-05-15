import { Button, Container, Grid, useTheme } from "@material-ui/core";
//import { useState } from "react";

import { useLocation, useHistory } from "react-router-dom";

import ViewRevisionsComponent from "../../components/ViewRevisionsComponent/ViewRevisionsComponent";
import "./Style.css";

const ViewRevisions = (props) => {
  const theme = useTheme();

  const location = useLocation();
  const history = useHistory();

  //logica para renderizar as revisoes de acordo com o tanto que tem no bd
  //recebe os parametros quando chama a url
  var param = [];
  var revsCoi = [];
  var revisRend = [];
  param = location.state.listaRevisoes;
  const { idAta } = location.state;
  for (var k = 0; k < param.length; k++) {
    var coi = {
      revId: location.state[k].revId,
      ataRef: location.state[k].contemRevisoes.ataId,
      ataPrazo: location.state[k].revPrazo,
      usuNome: location.state[k].contemRevisoes.participaAtas[0].usuNome,
      revAssunto: location.state[k].revAssunto,
    };
    revsCoi.push(coi);
  }
  //renderiza de acordo com o dados que tem na lista que veio
  for (var k = 0; k < revsCoi.length; k++) {
    revisRend.push(
      <Grid container style={{ marginBottom: 10 }}>
        <ViewRevisionsComponent coi={revsCoi[k]} />
      </Grid>
    );
  }

  return (
    <Container>
      <form>
        {revisRend ? revisRend : "Sem revisões"}
        <Grid container justify="space-between" style={{ padding: 24 }}>
          <Button
            variant="contained"
            className="bold"
            style={{
              backgroundColor: "white",
              color: theme.palette.secondary.main,
              fontWeight: 700,
              fontSize: "1.5rem",
              borderRadius: 20,
              padding: "0 30px",
            }}
            onClick={() => history.push("ata", { id: idAta })}
          >
            Voltar
          </Button>
        </Grid>
      </form>
    </Container>
  );
};

export default ViewRevisions;
