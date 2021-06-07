import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ptBR from "../../components/ptBR/DataGrid";
import logServices from "../../services/log";

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

export default function Data() {
  const classes = useStyles();
  const [rows, setRows] = useState([]);
  const history = useHistory();

  const formatDate = (date) => {
    const data = new Date(date).toLocaleDateString();
    return data;
  };

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

  const columns = [
    { field: "logDataHora", headerName: "Data", width: 150 },
    { field: "logDescricao", headerName: "Descrição", width: 350 }, 
    { field: "logAutor", headerName: "Autor", width: 400 },
  ];

  return (
    <Grid container justify="center">
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
      </Grid>
    </Grid>
  );
}
