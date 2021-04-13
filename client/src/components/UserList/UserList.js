import React from 'react';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const columns = [
    { field: 'Usuário', headerName: 'Usuário', width: 130 },
    { field: 'Email', headerName: 'Email', width: 130 },
    { field: 'Cargo', headerName: 'Cargo', width: 130 },
    { field: 'ÁreaEmpresa', headerName: 'Área/Empresa', width: 160 },
    { field: 'Perfil', headerName: 'Perfil', width: 130 },
];

const rows = [
    { id: 1, Usuário: 'Snow', Email: 'Jon', Cargo: 'Dev', ÁreaEmpresa: 'IACIT', Perfil: 'ADM' },
    { id: 2, Usuário: 'Lannister', Email: 'Cersei', Cargo: 'Dev', ÁreaEmpresa: 'IACIT', Perfil: 'ADM' },
    { id: 3, Usuário: 'Lannister', Email: 'Jaime', Cargo: 'Dev', ÁreaEmpresa: 'IACIT', Perfil: 'ADM' },
    { id: 4, Usuário: 'Stark', Email: 'Arya', Cargo: 'Dev', ÁreaEmpresa: 'IACIT', Perfil: 'ADM' },
    { id: 5, Usuário: 'Targaryen', Email: 'Daenerys', Cargo: 'Dev', ÁreaEmpresa: 'IACIT', Perfil: 'ADM' },
];

const theme = createMuiTheme()
const useStyles = makeStyles({
    grid: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: "20px",
        padding: 20,
        width: '80%'
    },
    datagrid: {
        backgroundColor: theme.palette.primary.contrastText,
    }
});

export default function UserList() {
    const classes = useStyles();

    return (
        <Grid container className={classes.grid}>
            <DataGrid
                rows={rows}
                columns={columns}
                components={{ Toolbar: GridToolbar }}
                className={classes.datagrid}
            />
        </Grid>
    );
}