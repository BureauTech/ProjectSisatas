import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Input, FormLabel, Select, MenuItem } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
    root: {
        width: "90%",
        padding: 5,
        color: "#3379FA",
    },
    grid: {
        borderRadius: "20px",
        backgroundColor: "#3379FA",
        alignItems: "center",
        marginLeft: 1,
    },
    label: {
        color: "#fff",
        fontFamily: "Montserrat",
        fontSize: 30,
        whiteSpace: "nowrap",
        marginLeft: 20,
        paddingLeft: 10,
    },
    input: {
        background: "#fff",
        border: "none",
        borderRadius: "10px",
        width: "100%",
        height: 30,
        disableUnderline: "true",
        marginBottom: 60,
        whiteSpace: "nowrap",
        fontSize: 30,
        paddingRight: 20,
        marginTop: 20,

    },
    inputDate: {
        background: "#fff",
        border: "none",
        borderRadius: "10px",
        width: "100%",
        height: 30,
        disableUnderline: "true",
        marginBottom: 60,
        marginTop: 20,
        fontSize: 20,

    },
    button: {
        width: 50,
        height: 60,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginTop: -40,
        marginRight: 20,
    }
}));

export default function Filtros() {
    const classes = useStyles();
    return(
        <div className={classes.root}>
          <form>
            <Grid container spacing={5} alignItems="center" justify="flex-start" className={classes.root}>
                <Grid item xs={12} sm={12} md={12} lg={12} justify="center">

                    <Grid md={12} xl={6} xs={12} lg={12} container className={classes.grid} justify="space-between" alignItems="center" direction="row">
                        <Grid item xs={12} sm={6} md={3} lg={4}>
                        <Grid md={8} sm={12} xs={12} lg={8}>
                            <FormLabel className={classes.label} htmlFor="id">ID </FormLabel>
                            <Input id="id" className={classes.input} disableUnderline={true}/> 
                        </Grid>
                          
                          <Grid md={8} sm={12} xs={12} className={classes.grid}>
                            <FormLabel className={classes.label} htmlFor="inicio">Inicio </FormLabel>
                            <Input  id="inicio" type="date" className={classes.inputDate} disableUnderline={true}/>

                          </Grid>
                        </Grid>

                <Grid container xs={12} sm={12} md={6} lg={6} justify="flex-start">
                    <Grid item xs={12} sm={6} md={11} className={classes.grid} justify="space-between">
                        <FormLabel className={classes.label} htmlFor="projeto">Projeto </FormLabel>
                        <Input id="projeto"  className={classes.input} disableUnderline={true}/> 
                    </Grid>
                    

                        <Grid container  md={12} justify="space-between" direction="row" className={classes.grid}> 
                        
                            <Grid item justify="space-between" xs={12} sm={6} md={5} className={classes.grid}>
                                <FormLabel className={classes.label} htmlFor="fim">Fim </FormLabel>
                                <Input id="fim" type="date" className={classes.inputDate} disableUnderline={true}/> 
                            </Grid>

                            <Grid item xs={12} sm={6} md={5} className={classes.grid}>
                                <FormLabel className={classes.label} htmlFor="tipo">Tipo </FormLabel>
                                <Select className={classes.input} disableUnderline={true}>
                                <MenuItem value="">
                                    <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                                {//<Input id="tipo" className={classes.input} disableUnderline={true}/>
                                }
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container justify="flex-end" alignItems="center" xs={12} sm={12} md={3} lg={2}>
                        <Button type="submit" onClick={console.log("voce enviou")} className={classes.button}>
                            <SearchIcon style={{fontSize: 50, color: "#26BAF4"}} />
                        </Button>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </form>
        </div>
    );
}