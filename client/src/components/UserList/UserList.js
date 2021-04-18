import React, { useEffect, useState } from "react";
import {
  DataGrid,
  GridToolbar,
  setGridRowCountStateUpdate,
} from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import "../../index.js";
import "./UserList.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ptBR from "../ptBR/DataGrid";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";
import userServices from "../../services/user.js";

const useStyles = makeStyles((theme) => ({
  grid: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "20px",
    padding: 15,
    paddingBottom: 50,
    width: "60%",
    height: 900,
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

export default function UserList() {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const history = useHistory();

  // Carrega a lista de usuários antes de montar o componente
  useEffect(() => {
    userServices
      .listarUsuarios()
      .then((res) => {
        let lista = res.data;
        let lista2 = [];
        lista.forEach((user) => {
          lista2.push({ id: user["usuId"], ...user });
        });
        setRows(lista2);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const columns = [
    { field: "usuNome", headerName: "Usuário", width: 130 },
    { field: "usuEmail", headerName: "Email", width: 130 },
    { field: "usuCargo", headerName: "Cargo", width: 130 },
    { field: "usuAreaEmpresa", headerName: "Área/Empresa", width: 170 },
    { field: "perterceUsuarios", headerName: "Perfil", width: 120 },
    {
      field: "Exibir",
      headerName: "Exibir",
      width: 130,
      renderCell: (params) => (
        <Button
          onClick={() => history.push("profile", { id: params.getValue("id") })}
        >
          <VisibilityIcon className="icon" />
        </Button>
      ),
    },
    {
      field: "Editar",
      headerName: "Editar",
      width: 130,
      renderCell: (params) => (
        <Button
          onClick={() =>
            history.push("edit-user", { id: params.getValue("id") })
          }
        >
          <EditIcon className="icon" />
        </Button>
      ),
    },
    {
      field: "Excluir",
      headerName: "Excluir",
      width: 130,
      renderCell: (params) => (
        <Button onClick={() => console.log(params.getValue("id"))}>
          <DeleteIcon className="icon" />
        </Button>
      ),
    },
  ];

  return (
    <Grid className={classes.grid} direction="column" alignItems="center">
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
        <Link to="/registeruser" style={{ textDecoration: "none" }}>
          <Button className={classes.btn}>Novo Usuário</Button>
        </Link>
      </Grid>
    </Grid>
  );
}
