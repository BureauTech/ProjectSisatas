import React from "react";
import { DataGrid, GridToolbar, ptBR	} from "@material-ui/data-grid";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Button, withTheme } from "@material-ui/core";
import VisibilityIcon from '@material-ui/icons/Visibility';


const theme = createMuiTheme(ptBR,)

const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "projeto", headerName: "Projeto", width: 130 },
    { field: "criado", headerName: "Criado em", width: 130 },
    { field: "tipo", headerName: "Tipo", width: 130 },
    { field: "estado", headerName: "Estado", width: 130 },
    { field: "link", headerName: "Ver", width: 100, 
    renderCell: (params) => (
    <Button onClick={() => console.log(params.getValue("id"))} ><VisibilityIcon/></Button>)},
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
        height: 400,
        fontFamily: "Montserrat",
        fontSize: 40
      },
      data: {
        backgroundColor: "#3379FA",

      }
  }));

  const datagrid = <DataGrid 
    components={{Toolbar: GridToolbar,}}
    rows={rows}
    columns={columns}
    pageSize={rows.length}
    hideFooter={true}
    style={{color:"#fff"}}
    className={useStyles.data}
    />;

  export default function Data() {
    const classes = useStyles();
    return (
        <div className={classes.root} >
          <ThemeProvider theme={theme}>
            {datagrid}
          </ThemeProvider>
        </div>
    )
};