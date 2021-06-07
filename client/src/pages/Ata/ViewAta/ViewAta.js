import { Button, Container, Grid, Typography, useTheme } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";

import AtaHeader from "../../../components/Ata/ViewAta/AtaHeader";
import ProjectParticipants from "../../../components/Ata/ViewAta/ProjectParticipants";
import Topics from "../../../components/Ata/ViewAta/Topics";
import { useEffect, useState } from "react";
import "../CreateAta/Style.css";
import ataServices from "../../../services/ata";
import { useInfoAta } from "../../../context/InfoAta";
import Loading from "../../Loading/Loading";
import revisaoServices from "../../../services/revisao";
import TextareaView from "../../../components/Ata/ViewAta/TextareaView";
import AprovacaoAta from "../../../components/Ata/ViewAta/AprovacaoAta";
import aprovacaoAtaServices from "../../../services/aprovacaoAta";
import { useAutenticacao } from "../../../context/Autenticacao";

const ViewAta = ({ ajustarLayout }) => {
  const theme = useTheme();
  const { setInfoAta, infoAta } = useInfoAta();
  const [isLoading, setIsLoading] = useState(true);
  const [infos, setInfos] = useState([]);
  const { usuario } = useAutenticacao();
  const [estado, setEstado] = useState("");

  const [idAta, setIdAta] = useState();

  const listaRevisoes = [];

  const location = useLocation();
  const history = useHistory();

  const cadastrarAprovacaoAta = (descricao) => {
    const body = {
      aprDescricao: descricao,
      aprovaAta: {
        usuId: usuario.usuId,
      },
      ataReferencia: {
        ataId: idAta,
      },
    };

    const cadastrar = async () => {
      try {
        await aprovacaoAtaServices.cadastrarAprovacaoAta(body)
        const r = await aprovacaoAtaServices.pegarAprovacaoUsuario(usuario.usuId, idAta)
        setEstado(r.data[0].aprDescricao)
      } catch (error) {
        console.log(error.message)
      }
    }
    cadastrar()  
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  const formatTime = (time) => {
    return `${("0" + time[0]).slice(-2)}:${("0" + time[1]).slice(-2)}`;
  };

  useEffect(() => {
    const idBuscar = location.state.id;
    setIdAta(idBuscar);

    //busca revisoes e faz o tratamento
    revisaoServices
      .listarRevisoes()
      .then((res) => {
        setInfos(res.data.data);
      })
      .catch((err) => console.log(err));

    // Id sem a barra "/"
    ataServices
      .pegarAta(idBuscar.split("/").join(""))
      .then(({ data }) => {
        const dados = data.data;
        aprovacaoAtaServices
          .pegarAprovacaoUsuario(usuario.usuId, dados.ataId)
          .then((r) => setEstado(r.data[0].aprDescricao))
          .catch((e) => console.log(e.message));
        setIdAta(dados.ataId);
        const infoHeader = {
          ataId: dados.ataId,
          ataDataInicio: formatDate(dados.ataDataInicio),
          ataHoraInicio: formatTime(dados.ataHoraInicio),
          ataDataFim: formatDate(dados.ataDataFim),
          ataHoraFim: formatTime(dados.ataHoraFim),
          ataLocal: dados.ataLocal,
        };
        const infoProject = {
          ataProjeto: dados.ataProjeto,
          participantes: dados.participaAtas,
        };
        setInfoAta({
          header: infoHeader,
          projeto: infoProject,
          pauta: dados.ataPauta,
          assuntos: dados.assuntos,
          observacao: dados.ataObservacao,
        });
      })
      .catch((err) => console.log("erro:", err.message))
      .finally(() => setIsLoading(false));

    // Ao desmontar o componente, limpar as informações da ata
    return () => {
      setInfoAta({
        header: "",
        projeto: "",
        pauta: "",
        assuntos: [],
        observacao: "",
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //verifica se o id da ata esta na revisao
  const ll = () => {
    for (var k = 0; k < infos.length; k++) {
      if (infos[k].contemRevisoes.ataId === idAta) {
        listaRevisoes.push(infos[k]);
      }
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  // Alterna entre os estados "Open" e "Close" da lista
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <Grid container style={{ marginBottom: 10 }}>
            <Typography style={{ paddingLeft: 24, fontSize: "1.4rem" }}>Aprovação</Typography>
            <AprovacaoAta
              estado={estado}
              cadastrarAprovacaoAta={cadastrarAprovacaoAta}
              ataId={idAta}
              ataDataInicio={infoAta.header.ataDataInicio}
            />
          </Grid>
          <Grid container style={{ marginBottom: 10 }}>
            <Typography style={{ paddingLeft: 24, fontSize: "1.4rem" }}>Cabeçalho</Typography>
            <AtaHeader header={infoAta.header} ajustarLayout={ajustarLayout} />
          </Grid>
          <Grid container style={{ marginBottom: 10 }}>
            <Typography style={{ paddingLeft: 24, fontSize: "1.4rem" }}>ATA de Reunião</Typography>
            <ProjectParticipants infoProject={infoAta.projeto} />
          </Grid>
          <Grid container style={{ marginBottom: 10 }}>
            <Typography style={{ paddingLeft: 24, fontSize: "1.4rem" }}>Pauta</Typography>
            <TextareaView infoValue={infoAta.pauta} />
          </Grid>
          <Grid container style={{ marginBottom: 10 }}>
            <Typography style={{ paddingLeft: 24, fontSize: "1.4rem" }}>Observações</Typography>
            <TextareaView infoValue={infoAta.observacao} />
          </Grid>
          <Grid container style={{ marginBottom: 10 }}>
            <Topics isOpen={isOpen} handleClick={handleClick} infoTopics={infoAta.assuntos} />
          </Grid>
          {/* <Grid container style={{ marginBottom: 10 }}>
            <Typography style={{ paddingLeft: 24, fontSize: "1.4rem" }}>Status</Typography>
            <Status />
          </Grid> */}
          <Grid container justify="space-between" style={{ padding: 24 }}>
            <Link to="/visualizar-atas" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                className="bold"
                style={{
                  backgroundColor: "white",
                  color: theme.palette.secondary.main,
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  borderRadius: 16,
                  padding: "0 5px",
                }}
              >
                Voltar
              </Button>
            </Link>
            <Button
              variant="contained"
              color="secondary"
              className="bold"
              style={{
                color: "white",
                fontSize: "1.5rem",
                borderRadius: 16,
                padding: "0 5px",
              }}
              onClick={handleClick}
            >
              Visualizar Assuntos
            </Button>
{/*            <Button
              variant="contained"
              color="secondary"
              className="bold"
              style={{
                color: "white",
                fontSize: "1.5rem",
                borderRadius: 16,
                padding: "0 5px",
              }}
            >
              Revisões Pendentes
            </Button> */}
            {/*<Link to="/revisoes" style={{ textDecoration: "none" }}>*/}
            <Button
              variant="contained"
              color="secondary"
              className="bold"
              style={{
                color: "white",
                fontSize: "1.5rem",
                borderRadius: 16,
                padding: "0 5px",
              }}
              onClick={() => {
                ll();
                history.push("revisoes", {
                  listaRevisoes: listaRevisoes,
                  idAta: idAta,
                });
              }}
            >
              Visualizar Revisões
            </Button>
            {/*</Link>*/}

            <Button
              variant="contained"
              color="secondary"
              className="bold"
              style={{
                color: "white",
                fontSize: "1.5rem",
                borderRadius: 16,
                padding: "0 5px",
              }}
              onClick={() =>
                history.push("nova-revisao", { ataid: idAta, ataDataInicio: infoAta.header.ataDataInicio })
              }
            >
              Nova Revisão
            </Button>
          </Grid>
        </>
      )}
    </Container>
  );
};

export default ViewAta;
