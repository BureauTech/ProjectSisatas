import React from "react";
import { DataGrid, GridToolbar	} from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import VisibilityIcon from '@material-ui/icons/Visibility';
import "./Data.css";
import ptBR from "../ptBR/DataGrid";






const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "projeto", headerName: "Projeto", width: 200 },
    { field: "criado", headerName: "Criado em", width: 150 },
    { field: "tipo", headerName: "Tipo", width: 150 },
    { field: "estado", headerName: "Estado", width: 150 },
    { field: "link", headerName: "Exibir", width: 120, 
    renderCell: (params) => (
    <Button onClick={() => console.log(params.getValue("id"))} ><VisibilityIcon className="btmeio"/></Button>)},
  ];
  const rows = [
   { id: 1, projeto: "Teste", criado: "22/01/2021", tipo: "Ata", estado: "Nova", link: "teste" },
   { id: 2, projeto: "Teste", criado: "27/01/2021", tipo: "Minuta", estado: "Nova" },
   { id: 3, projeto: "Teste", criado: "28/03/2021", tipo: "Ata", estado: "Revisada" },
   { id: 4, projeto: "Teddsdsdsdsste", criado: "22/01/2021", tipo: "Ata", estado: "Nova" },
   { id: 5, projeto: "Teste", criado: "27/01/2021", tipo: "Minuta", estado: "Nova" },
   { id: 6, projeto: "Teste", criado: "28/03/2021", tipo: "Ata", estado: "Revisada" },
   { id: 7, projeto: "Teste", criado: "22/01/2021", tipo: "Ata", estado: "Nova" },
   { id: 8, projeto: "Teste", criado: "27/01/2021", tipo: "Minuta", estado: "Nova" },
   { id: 9, projeto: "Teste", criado: "28/03/2021", tipo: "Ata", estado: "Revisada" },
   { id: 10, projeto: "Teste", criado: "22/01/2021", tipo: "Ata", estado: "Nova" },
   { id: 11, projeto: "Teste", criado: "27/01/2021", tipo: "Minuta", estado: "ewew" },
   { id: 12, projeto: "Teste", criado: "28/03/2021", tipo: "Ata", estado: "Revisada" },
   { id: 13, projeto: "Teste", criado: "22/01/2021", tipo: "Ata", estado: "Nova" },
   { id: 14, projeto: "Teste", criado: "27/01/2021", tipo: "Minuta", estado: "Nova" },
   { id: 15, projeto: "Teste", criado: "28/03/2021", tipo: "Ata", estado: "Revisada" },
   { id: 16, projeto: "Teste", criado: "22/01/2021", tipo: "Ata", estado: "Nova" },
   { id: 17, projeto: "Teste", criado: "27/01/2021", tipo: "Minuta", estado: "Nova" },
   { id: 18, projeto: "Teste", criado: "28/03/2021", tipo: "Ata", estado: "Revisada" },
  ];
  const useStyles = makeStyles((props) => ({
      root: {
        backgroundColor: "#EFEFEF",
        marginLeft: "11%",
        alignItems: "center",
        width: "75%",
        borderRadius: 20,
      },
      data: {
        

      },
      grid: {
        height: 600,
        backgroundColor: "#3379FA",
        borderRadius: 10,
        padding: 15,
      }
  }));

  const datagrid = <DataGrid 
    components={{Toolbar: GridToolbar,}}
    localeText={ptBR}
    rows={rows}
    columns={columns}
    pageSize={rows.length}
    hideFooter={true}
    disableSelectionOnClick={true}
    checkboxSelection
    className={useStyles.data}
    />;

  export default function Data() {
    const classes = useStyles();
    return (
        <div className={classes.root} >
          <Grid container className={classes.grid}>
            {datagrid}
          </Grid>
        </div>
    )
};