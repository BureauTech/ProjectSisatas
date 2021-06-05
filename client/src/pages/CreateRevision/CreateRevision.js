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

const CreateRevision = (props) => {
  const theme = useTheme();

  const [revAssunto, setInfoAss] = useState("");
  const [infoHeader, setRevHeader] = useState({});

  const [openSnack, setOpenSnack] = useState(false);
  const [msgSucesso, setMsgSucesso] = useState("");
  const [msgErro, setMsgErro] = useState("");

  const [ataid, setAtaid] = useState("");

  const [enviar, setEnviar] = useState([]);
  const [dadosTemp, setDadosTemp] = useState([]);
  const [ataProjeto, setataProjeto] = useState("");

  const location = useLocation();

  const history = useHistory();
  

  const body = {
    ...infoHeader,
    revAssunto,
  };
  //body.infoHeader.contemRevisoes.ataId = props.ataid;
  //body.responsavelRevisoes.usuId = props.user;

  const EmailRevisao = () => {
    var k = 0
  setAtaid(location.state.ataid)
  const ataSemBarra = ataid.replace("/", "")
  console.log(ataSemBarra)
  ataServices.pegarAta(ataSemBarra)
    .then(res => {
      setDadosTemp(res.data.data.participaAtas)
      setataProjeto(res.data.data.ataProjeto)
    })
    .catch(err =>{
      console.log(err)
    })

    for(k=0; k<dadosTemp.length; k++) {
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
      infTemp.emailReceber = dadosTemp[k].usuEmail
      infTemp.nomeReceber = dadosTemp[k].usuNome
      infTemp.ataProjeto = ataProjeto
      enviar.push(infTemp)
      console.log(infTemp)
    }

    console.log('emails aqui: '+JSON.stringify(enviar))

     emailServices
      .enviaRevEmail(enviar)
      .then(res => console.log("email enviado\nres: "+res))
      .catch (err => console.log("email nao enviado\nerro: "+err))

    setDadosTemp([]);
    setEnviar([]);
  }


  const CriarRevisao = (e) => {
    e.preventDefault();

    revisaoServices
      .criarRevisao(body)
      .then((res) => {
        setMsgSucesso("Revisão cadastrada com sucesso!");
        setMsgErro(false);
        setOpenSnack(true);
        EmailRevisao()
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
            resp={location.state.user}
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