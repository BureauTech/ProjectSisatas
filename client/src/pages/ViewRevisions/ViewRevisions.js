import { Button, Container, Grid, Typography, useTheme } from "@material-ui/core";
import { useEffect, useState } from "react";
//import { useState } from "react";

import { useLocation, useHistory } from "react-router-dom";

import ViewRevisionsComponent from "../../components/ViewRevisionsComponent/ViewRevisionsComponent";
import revisaoServices from "../../services/revisao";
import "./Style.css";

const ViewRevisions = (props) => {
  const theme = useTheme();

  const location = useLocation();
  const history = useHistory();
  const [revisoes, setRevisoes] = useState([]);
  const { idAta } = location.state;

  useEffect(() => {
    const idBuscar = location.state.id;

    //busca revisoes e faz o tratamento
    revisaoServices
      .listarRevisoes()
      .then((res) => {
        const revisoesDaAta = res.data.data.filter((revisao) => revisao.contemRevisoes.ataId === idAta);
        setRevisoes(revisoesDaAta);
      })
      .catch((err) => console.log(err));
  }, []);

  //logica para renderizar as revisoes de acordo com o tanto que tem no bd
  var revisRend = [];

  for (var k = 0; k < revisoes.length; k++) {
    revisRend.push(
      <Grid container style={{ marginBottom: 10 }}>
        <ViewRevisionsComponent revisoes={revisoes[k]} customId={k + 1} />
      </Grid>
    );
  }

  return (
    <Container>
      <form>
        <Grid container style={{ marginBottom: 10 }}>
          <Typography style={{ paddingLeft: 24, fontSize: "1.4rem" }}>Exibir Revisões</Typography>
        </Grid>
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
