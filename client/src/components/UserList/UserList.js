import React from 'react';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import "../../index.js";
import "./UserList.css"
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    grid: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: "20px",
        padding: 15,
        paddingBottom: 50,
        width: '90%',
        height: 550,
        marginRight: 10
    },
    datagrid: {
        backgroundColor: '#FFFFFF',
    },
    btn: {
        color: "white",
        backgroundColor: theme.palette.secondary.main,
        fontWeight: 700,
        fontSize: "1rem",
        borderRadius: 20,
        padding: "5px 20px",
        '&:hover': {
            backgroundColor: "white",
            color: theme.palette.secondary.main,
        }
    },
    container: {
        marginTop: 5,
        justifyContent: 'center'
    },
    icon: {
        '&:hover': {
            color: theme.palette.secondary.main
        }
    }
}));

const columns = [
    { field: 'Usuário', headerName: 'Usuário', width: 130 },
    { field: 'Email', headerName: 'Email', width: 130 },
    { field: 'Cargo', headerName: 'Cargo', width: 130 },
    { field: 'ÁreaEmpresa', headerName: 'Área/Empresa', width: 160 },
    { field: 'Perfil', headerName: 'Perfil', width: 100 },
    {
        field: "Exibir", headerName: "Exibir", width: 100,
        renderCell: (params) => (
            <Button onClick={() => console.log(params.getValue("id"))} ><VisibilityIcon className='icon' /></Button>)
    },
    {
        field: "Editar", headerName: "Editar", width: 100,
        renderCell: (params) => (
            <Button onClick={() => console.log(params.getValue("id"))} ><EditIcon className='icon' /></Button>)
    },
    {
        field: "Excluir", headerName: "Excluir", width: 100,
        renderCell: (params) => (
            <Button onClick={() => console.log(params.getValue("id"))} ><DeleteIcon className='icon' /></Button>)
    }
];

const rows = [
    { id: 1, Usuário: 'Snow', Email: 'Jon', Cargo: 'Dev', ÁreaEmpresa: 'IACIT', Perfil: 'ADM' },
    { id: 2, Usuário: 'Lannister', Email: 'Cersei', Cargo: 'Dev', ÁreaEmpresa: 'IACIT', Perfil: 'ADM' },
    { id: 3, Usuário: 'Lannister', Email: 'Jaime', Cargo: 'Dev', ÁreaEmpresa: 'IACIT', Perfil: 'ADM' },
    { id: 4, Usuário: 'Stark', Email: 'Arya', Cargo: 'Dev', ÁreaEmpresa: 'IACIT', Perfil: 'ADM' },
    { id: 5, Usuário: 'Targaryen', Email: 'Daenerys', Cargo: 'Dev', ÁreaEmpresa: 'IACIT', Perfil: 'ADM' },
];

export default function UserList() {
    const classes = useStyles();
    return (
        <Grid className={classes.grid} direction='column' alignItems="center">
            <DataGrid
                rows={rows}
                columns={columns}
                components={{ Toolbar: GridToolbar }}
                className={classes.datagrid}
                checkboxSelection={true}
                hideFooter={true}
            />
            <Grid container className={classes.container}>
                <Button className={classes.btn}>Novo Usuário</Button>
            </Grid>
        </Grid>
    );
}