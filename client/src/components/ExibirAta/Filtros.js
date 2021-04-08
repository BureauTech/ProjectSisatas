import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Input, FormLabel, Select, MenuItem } from "@material-ui/core";

const imgLupa =
  "https://images.vexels.com/media/users/3/136335/isolated/preview/58bc9a0e0787485f7bdccec5a9b48a17-iacute-cone-de-lupa-com-sombras-by-vexels.png";
const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%%",
        padding: 5,
        color: "#fff",
    },
    grid: {
        borderRadius: "20px",
        width: "100%",
        backgroundColor: "#3379FA",
        alignItems: "center",
        marginLeft: 1,
    },
    label: {
        color: "#fff",
        fontFamily: "Montserrat",
        fontSize: 30,
        whiteSpace: "nowrap",
    },
    input: {
        background: "#fff",
        border: "none",
        borderRadius: "10px",
        width: "75%",
        height: 30,
        disableUnderline: "true",
        marginBottom: 60,
        whiteSpace: "nowrap",
        fontSize: 30,

    },
    inputDate: {
        background: "#fff",
        border: "none",
        borderRadius: "10px",
        width: "75%",
        height: 30,
        disableUnderline: "true",
        marginBottom: 60,
        fontSize: 20,

    },
    button: {
        width: 50,
        height: 60,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginTop: -50,
    }
}));

export default function Filtros() {
    const classes = useStyles();
    return(
        <div className={classes.root}>
          <form>
            <Grid container spacing={5} alignItems="center" justify="flex-start" className={classes.grid}>
                <Grid item xs={12} sm={12} md={12} justify="center">
                    <Grid md={12} xl={6} xs={12} container  alignItems="center" direction="row">
                        <Grid item xs={12} sm={6} md={3}>
                        <Grid md={10} sm={12} xs={12}>
                            <FormLabel className={classes.label} htmlFor="id">ID </FormLabel>
                            <Input id="id" className={classes.input} disableUnderline={true}/> 
                        </Grid>
                          
                          <Grid md={10} sm={12} xs={12}>
                            <FormLabel className={classes.label} htmlFor="inicio">Inicio </FormLabel>
                            <Input  id="inicio" type="date" className={classes.inputDate} disableUnderline={true}/>

                          </Grid>
                        </Grid>

                    <Grid item justify="flex-start" item xs={12} sm={12} md={7}>
                        <FormLabel className={classes.label} htmlFor="projeto">Projeto </FormLabel>
                        <Input id="projeto"  className={classes.input} disableUnderline={true}/> 
                        <Grid container justify="flex-end" direction="row">
                            <Grid item justify="flex-end" xs={12} sm={6} md={5}>
                                <FormLabel className={classes.label} htmlFor="fim">Fim </FormLabel>
                                <Input id="fim" type="date" value={"null"} className={classes.inputDate} disableUnderline={true}/> 
                            </Grid>

                            <Grid item xs={12} sm={6} md={6}>
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

                    <Grid container justify="center" alignItems="center" xs={12} sm={12} md={2}>
                        <Button type="submit" onClick={console.log("voce enviou")} className={classes.button}>
                            <img width={"50px"} src={imgLupa}/>
                        </Button>
                    </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </form>
        </div>
    );
}