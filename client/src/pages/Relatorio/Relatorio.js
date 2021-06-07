import React, { forwardRef, useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Dialog, DialogContent, DialogContentText, Typography, Slide } from "@material-ui/core";
import "../../index.js";
import "../../components/UserList/UserList.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ptBR from "../../components/ptBR/DataGrid";
import { Link, useHistory } from "react-router-dom";
import Alerta from "../../components/Snackbar/Alerta.js";
import Loading from "../../pages/Loading/Loading.js";
import ataServices from "../../services/ata.js";
import { useAutenticacao } from "../../context/Autenticacao.js";
import logServices from "../../services/log";
import aprovacaoAtaServices from "../../services/aprovacaoAta.js";
import emailServices from "../../services/email.js";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  grid: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "20px",
    padding: 15,
    paddingBottom: 50,
    [theme.breakpoints.up("md")]: { width: "90%" },
    [theme.breakpoints.down("md")]: { width: "95%" },
    [theme.breakpoints.up("lg")]: { width: "80%" },
    height: 800,
    marginRight: 10,
  },
  datagrid: {
    backgroundColor: "#FFFFFF",
  },
  btn: {
    color: "white",
    backgroundColor: theme.palette.secondary.main,
    fontWeight: 700,
    fontSize: "1rem",
    borderRadius: 20,
    padding: "5px 20px",
    "&:hover": {
      backgroundColor: "white",
      color: theme.palette.secondary.main,
    },
  },
  container: {
    marginTop: 5,
    justifyContent: "center",
  },
  icon: {
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));

/**
 * Arquivo para página de relatório do gerente
 *
 * @author Denis Lima
 * @param {any} props
 * @returns Componente para Relatório do Gerente
 */
const Relatorio = (props) => {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [openSnack, setOpenSnack] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [dados, setDados] = useState([]);
  const [msgSucesso, setMsgSucesso] = useState("");
  const [msgErro, setMsgErro] = useState("");
  const history = useHistory();

  const columns = [
    { field: "data", headerName: "Data", width: 150 },
    { field: "estado", headerName: "Estado", width: 150 },
    { field: "projeto", headerName: "Projeto", width: 300 },
    { field: "usuResponsavel", headerName: "Responsável", width: 300 },
    {
      field: "Exibir",
      headerName: "Exibir Ata",
      width: 140,
      renderCell: (params) => (
        <Button onClick={() => history.push("ata", { id: params.id })}>
          <VisibilityIcon className="icon" />
        </Button>
      ),
    },
    {
      field: "Pendentes",
      headerName: "Pendências",
      width: 160,
      renderCell: (params) => (
        <Button
          onClick={() => {
            getDados(params.id);
            handleClick();
          }}
        >
          <VisibilityIcon className="icon" />
        </Button>
      ),
    },
    {
      field: "Envio",
      headerName: "Enviar ata",
      width: 160,
      renderCell: (params) => (
        <Button onClick={() => enviarPorEmail(params.id)}>
          <VisibilityIcon className="icon" />
        </Button>
      ),
    },
  ];
  const formatDate = (date) => {
    const data = new Date(date).toLocaleDateString();
    return data;
  };

  //funcao para fazer o envio do email
  const enviarPorEmail = (id) => {
    console.log("ataid", id);
    const pegarAta = async () => {
      try {
        const dados = await ataServices.pegarAta(id.split("/").join(""));
        const ata = dados.data.data;

        const infoProject = ata.participaAtas;

        const listaEmail = [];

        for (var i = 0; i < infoProject.length; i++) {
          var bodyEmail = {
            userEnviar: "Noreply.bureautech",
            senhaEnviar: "bureautech",
            emailEnviar: "noreply.bureautech@gmail.com",
            nomeEnviar: "Sisatas",
            emailReceber: infoProject[i].usuEmail,
            nomeReceber: infoProject[i].usuNome,
            ataId: ata.ataId,
            linkDown: `http://localhost:8080/download/ata/excel/${ata.ataId}`,
            ataProjeto: ata.ataProjeto,
          };

          listaEmail.push(bodyEmail);
        }
        emailServices
          .enviaAtaEmail(listaEmail)
          .then((res) => {
            setMsgSucesso("Ata enviada por email!")
            setMsgErro(false)
            setOpenSnack(true)
          })
          .catch((err) => {
            setMsgSucesso(false)
            setMsgErro("Erro ao enviar ata por email")
            setOpenSnack(true)
          });
      } catch (error) {
        console.log(error);
      }
    };

    pegarAta();
  };

  const { usuario } = useAutenticacao();
  useEffect(() => {
    logServices
      .pegarLogs("DataGrid")
      .then((res) => {
        let lista = res.data;
        let lista2 = [];
        lista.forEach((log) => {
          log.logDataHora = formatDate(log.logDataHora);
          lista2.push({ id: log["logId"], ...log });
        });
        setRows(lista2);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [setRows]);

  useEffect(() => {
    ataServices
      .listarAtas("DataGrid")
      .then((res) => {
        let lista = res.data.data;
        let lista2 = [];
        lista.forEach((ata) => {
          ata.ataDataCriacao = formatDate(ata.ataDataCriacao);
          console.log(ata.geraAtas.usuId, usuario.usuId);
          if (ata.geraAtas.usuId === usuario.usuId) {
            lista2.push({
              id: ata.ataId,
              data: ata.ataDataCriacao,
              estado: ata.ataEstado,
              projeto: ata.ataProjeto,
              usuResponsavel: ata.geraAtas.usuNome,
            });
          }
        });
        setRows(lista2);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const getDados = (idAta) => {
    aprovacaoAtaServices
      .pegarRelatorio(idAta)
      .then((r) => setDados(r.data))
      .catch((err) => console.log(err));
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Grid container justify="center">
      {/* <Grid item sm={12} lg={12}>
        <Grid container justify="center"> */}
      <Grid className={classes.grid} direction="column" alignItems="center">
        {isLoading && <Loading />}
        <DataGrid
          rows={rows}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          className={classes.datagrid}
          checkboxSelection={true}
          hideFooter={true}
          localeText={ptBR}
          disableSelectionOnClick={true}
        />
        <Alerta isOpen={openSnack} setIsOpen={setOpenSnack} sucesso={msgSucesso} erro={msgErro} />
        <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClick}>
          <DialogContent>
            <DialogContentText>
              <Grid container justify="space-around">
                {dados &&
                  dados.map((dds, index) => {
                    return (
                      <Grid item xs={12} key={index + 1} style={{ padding: "10px" }}>
                        <Typography>
                          {dds.aprDescricao} - {dds.aprovaAta.usuNome}
                        </Typography>
                      </Grid>
                    );
                  })}
              </Grid>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </Grid>
      {/* </Grid>
      </Grid> */}
    </Grid>
  );
};

export default Relatorio;
