import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Dialog, DialogTitle, DialogActions } from "@material-ui/core";
import "../../index.js";
import "./UserList.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ptBR from "../ptBR/DataGrid";
import { Link, useHistory } from "react-router-dom";
import userServices from "../../services/user.js";
import Alerta from "../Snackbar/Alerta.js";
import Loading from "../../pages/Loading/Loading.js";

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
 * Arquivo para página de lista de usuários
 * @author Beatriz Coutinho
 * @returns Componente para listagem de usuários
 */
export default function UserList() {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const [openSnack, setOpenSnack] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [msgSucesso, setMsgSucesso] = useState("");
  const [msgErro, setMsgErro] = useState("");
  const [idDelete, setIdDelete] = useState(null);
  const history = useHistory();

  // Carrega a lista de usuários antes de montar o componente
  useEffect(() => {
    userServices
      .listarUsuarios("DataGrid")
      .then((res) => {
        let lista = res.data;
        let lista2 = [];
        lista.forEach((user) => {
          lista2.push({ id: user["usuId"], ...user });
        });
        setRows(lista2);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
        setMsgSucesso(false);
        setMsgErro("Ocorreu um erro ao carregar a lista de usuários");
        setOpenSnack(true);
      });
  }, [setRows]);

  // Fecha o popup de confirmação de exclusão de usuário
  const handleClose = () => {
    setOpen(false);
  };

  /**
   * Pega o ID do usuário e abre a confirmação de exclusão
   * @param {Number} id Número do id do usuário
   */
  const handleAskDelete = (id) => {
    setIdDelete(id);
    setOpen(true);
  };

  const columns = [
    { field: "usuNome", headerName: "Usuário", width: 130 },
    { field: "usuEmail", headerName: "Email", width: 130 },
    { field: "usuCargo", headerName: "Cargo", width: 130 },
    { field: "usuAreaEmpresa", headerName: "Área/Empresa", width: 170 },
    { field: "usuPerfil", headerName: "Perfil", width: 120 },
    {
      field: "Exibir",
      headerName: "Exibir",
      width: 130,
      renderCell: (params) => (
        <Button onClick={() => history.push("perfil", { id: params.id })}>
          <VisibilityIcon className="icon" />
        </Button>
      ),
    },
    {
      field: "Editar",
      headerName: "Editar",
      width: 130,
      renderCell: (params) => (
        <Button onClick={() => history.push("editar-usuario", { id: params.id })}>
          <EditIcon className="icon" />
        </Button>
      ),
    },
    {
      field: "Excluir",
      headerName: "Excluir",
      width: 130,
      renderCell: (params) => (
        <Button onClick={() => handleAskDelete(params.id)}>
          <DeleteIcon className="icon" />
        </Button>
      ),
    },
  ];

  /**
   * Realiza a requsição de exclusão de usuário para o servidor, e devolve na tela uma mensagem de sucesso ou erro
   * @author Denis Lima
   * @param {Number} id Número do id do usuário para exclusão
   */
  const handleDelete = (id) => {
    userServices
      .deletarUsuario(id)
      .then((res) => {
        if (res.data.erro) {
          setMsgSucesso(false);
          if (res.data.mensagem.includes("constraint"))
            setMsgErro("Ocorreu um erro ao deletar o usuário. Motivo: Usuário participante de um documento");
          setOpenSnack(true);
        }
        else {
          setMsgSucesso("Usuário deletado com sucesso!");
          setMsgErro(false);
          const newRows = rows.filter((user) => user.usuId !== id);
          setRows(newRows);
          setOpenSnack(true);
        }
      })
      .catch((err) => {
        console.log(err.message);
        setMsgSucesso(false);
        setMsgErro("Ocorreu um erro ao deletar o usuário");
        setOpenSnack(true);
      });
    setOpen(false);
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
        <Grid container className={classes.container}>
          <Link to="/cadastrar-usuario" style={{ textDecoration: "none" }}>
            <Button className={classes.btn}>Novo Usuário</Button>
          </Link>
        </Grid>
        <Alerta isOpen={openSnack} setIsOpen={setOpenSnack} sucesso={msgSucesso} erro={msgErro} />
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Tem certeza que deseja excluir este usuário?</DialogTitle>
          <DialogActions>
            <Grid container justify="space-evenly">
              <Button onClick={() => handleDelete(idDelete)} color="primary" variant="contained">
                EXCLUIR
              </Button>
              <Button onClick={handleClose} color="primary" variant="contained">
                Cancelar
              </Button>
            </Grid>
          </DialogActions>
        </Dialog>
      </Grid>
      {/* </Grid>
      </Grid> */}
    </Grid>
  );
}
