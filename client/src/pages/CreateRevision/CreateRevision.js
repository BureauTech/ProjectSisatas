import { Button, Container, Grid, useTheme } from "@material-ui/core";

import { Link, useLocation, useHistory } from "react-router-dom";

import RevisionHeader from "../../components/CreateRevision/RevisionHeader";
import RevisionSubject from "../../components/CreateRevision/RevisionSubject";
import { useEffect, useState } from "react";
import "./Style.css";
import revisaoServices from "../../services/revisao";
import Alerta from "../../components/Snackbar/Alerta";
import ataServices from "../../services/ata";
import emailServices from "../../services/email";
import { useAutenticacao } from "../../context/Autenticacao";
import aprovacaoAtaServices from "../../services/aprovacaoAta";
import logServices from "../../services/log";

const CreateRevision = (props) => {
  const theme = useTheme();

  const [revAssunto, setInfoAss] = useState("");
  const [infoHeader, setRevHeader] = useState({});

  const [openSnack, setOpenSnack] = useState(false);
  const [msgSucesso, setMsgSucesso] = useState("");
  const [msgErro, setMsgErro] = useState("");


  const [enviar, setEnviar] = useState([]);

  const { usuario } = useAutenticacao()

  const location = useLocation();

  const history = useHistory();

  let dados = ""
  let projeto = ""


  const cadastrarAprovAta = location.state.cadastrarAprovacaoAta
  
  const body = {
    ...infoHeader,
    revAssunto,
  };


  //Salvar log de criação de ata

  var data = new Date();
  var dia = String(data.getDate()).padStart(2, '0');
  var mes = String(data.getMonth() + 1).padStart(2, '0');
  var ano = data.getFullYear();
  var dataAtual = ano + '-' + mes + '-' + dia;

  const salvarLogs = () => {
    var bodyLogs = {
      logAutor: usuario.usuNome,
      logDescricao: `Uma nova Revisão da ata ${location.state.ataid} criada por`,
      logDataHora: dataAtual,
    }
    console.log(bodyLogs)
    logServices.salvarLogs(bodyLogs)
      .then(res => console.log("res: ", res))
      .catch(err => console.log("res de erro: ", err))
  }



  //body.infoHeader.contemRevisoes.ataId = props.ataid;
  //body.responsavelRevisoes.usuId = props.user;

  const EmailRevisao = () => {
    var k = 0
    let idAta = location.state.ataid
    const ataSemBarra = idAta.replace("/", "")
    ataServices.pegarAta(ataSemBarra)
      .then(res => {
        projeto = res.data.data.ataProjeto
        dados = res.data.data.participaAtas

        for (k = 0; k < dados.length; k++) {
          console.log(k)
          var infTemp = {
            userEnviar: "Noreply.bureautech",
            senhaEnviar: "bureautech",
            emailEnviar: "noreply.bureautech@gmail.com",
            nomeEnviar: "Sisatas",
    
            emailReceber: "",
            nomeReceber: "",
    
            ataProjeto: "",
            revisao: ""
          }
          infTemp.emailReceber = dados[k].usuEmail
          infTemp.nomeReceber = dados[k].usuNome
          infTemp.ataProjeto = projeto
          enviar.push(infTemp)
          console.log(infTemp)
        }

        emailServices
        .enviaRevEmail(enviar)
        .then(res => console.log("email enviado\nres: " + res))
       .catch(err => console.log("email nao enviado\nerro: " + err))

        //console.log("os dados"+JSON.stringify(res.data.data.participaAtas))
        //console.log("dados "+JSON.stringify(dados))
      })
      .catch(err => {
        console.log(err)
      })

    dados = ""
    setEnviar([]);
  }

  const cadastrarAprovacaoAta = (descricao) => {
    const body = {
      aprDescricao: descricao,
      aprovaAta: {
        usuId: usuario.usuId,
      },
      ataReferencia: {
        ataId: location.state.ataid,
      },
    };
    aprovacaoAtaServices
      .cadastrarAprovacaoAta(body)
      .then(
        aprovacaoAtaServices
          .pegarAprovacaoUsuario(usuario.usuId, location.state.ataid)
          .then()
          .catch((e) => console.log(e.message))
      )
      .catch((err) => err.message);
  };


  const CriarRevisao = (e) => {
    e.preventDefault();

    revisaoServices
      .criarRevisao(body)
      .then((res) => {
        setMsgSucesso("Revisão cadastrada com sucesso!");
        if (cadastrarAprovAta) {
          cadastrarAprovacaoAta('Recusado')
        }
        setMsgErro(false);
        setOpenSnack(true);
        EmailRevisao();
        salvarLogs();
      })
      .catch((err) => {
        console.log(err);
        setMsgSucesso(false);
        setMsgErro("Ocorreu um erro ao cadastrar a revisão");
        setOpenSnack(true);
      });

    let seu_tempo_ta_acabando = setTimeout(function () {
      history.push("ata", { id: location.state.ataid });
    }, 3000);
  };
  //console.log(location.state);

  return (
    <Container>
      <form onSubmit={(e) => CriarRevisao(e)}>
        <Grid container style={{ marginBottom: 10 }}>
          <RevisionHeader
            setRevHeader={setRevHeader}
            resp={usuario.usuId}
            ataid={location.state.ataid}
            ataDataInicio={location.state.ataDataInicio}
            setMsgSucesso={setMsgSucesso}
            setMsgErro={setMsgErro}
            setIsOpen={setOpenSnack}
          />
        </Grid>
        <Grid container style={{ marginBottom: 10 }}>
          <RevisionSubject setInfoAss={setInfoAss} />
        </Grid>
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
            onClick={() => history.push("ata", { id: location.state.ataid })}
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className="bold"
            type="submit"
            style={{
              color: "white",
              fontSize: "1.5rem",
              borderRadius: 20,
              padding: "0 30px",
            }}
          >
            Salvar
          </Button>
        </Grid>
      </form>
      <Alerta isOpen={openSnack} setIsOpen={setOpenSnack} sucesso={msgSucesso} erro={msgErro} />
    </Container>
  );
};

export default CreateRevision;