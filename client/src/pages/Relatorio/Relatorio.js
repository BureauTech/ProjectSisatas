import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import "../../index.js";
import "../../components/UserList/UserList.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ptBR from "../../components/ptBR/DataGrid";
import { Link, useHistory } from "react-router-dom";
import Alerta from "../../components/Snackbar/Alerta.js";
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
  const [msgSucesso, setMsgSucesso] = useState("");
  const [msgErro, setMsgErro] = useState("");
  const history = useHistory();

  const columns = [
    { field: "data", headerName: "Data", width: 150 },
    { field: "estado", headerName: "Estado", width: 130 },
    { field: "projeto", headerName: "Projeto", width: 250 },
    { field: "usuResponsavel", headerName: "Usuário responsável", width: 300 },
    {
      field: "Exibir",
      headerName: "Exibir",
      width: 130,
      renderCell: (params) => (
        <Button 
        // onClick={() => history.push("perfil", { id: params.id })}
        >
          <VisibilityIcon className="icon" />
        </Button>
      ),
    },
  ];

  useEffect(() => {

    setRows([
      {
        id: 1,
        data: new Date().toLocaleDateString(),
        estado: 'Revisada',
        projeto: 'Titulo do projeto',
        usuResponsavel: 'Denis Ferreira Lima'
      },
      {
        id: 2,
        data: new Date().toLocaleDateString(),
        estado: 'Nova',
        projeto: 'Titulo do projeto 2',
        usuResponsavel: 'Charles Ramos Ferreira'
      },
      {
        id: 3,
        data: new Date().toLocaleDateString(),
        estado: 'Assinada',
        projeto: 'Titulo do projeto 3',
        usuResponsavel: 'Wesley Ribeiro Dias'
      },
    ])
  }, [])


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
      </Grid>
      {/* </Grid>
      </Grid> */}
    </Grid>
  );
}

export default Relatorio