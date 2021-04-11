import {
  Container,
  Grid,
  withStyles,
  Typography,
  FormLabel,
  Input,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  IconButton,
} from "@material-ui/core";

import {styles} from "../../assets/styles/Styles";
import {ImageSearch} from "@material-ui/icons";

const Register = (props) => {
  let {classes} = props;

  return (
    <Container>
      <Grid container className={classes.grid}>

        {/* cabeçalho */}
        <Grid container justify="center">
          <Typography className={classes.normalText} style={{paddingBottom: 60}}>Cadastro de Usuário</Typography>
        </Grid>

        {/* formulario */}
        <Grid container>

          <form action="/" style={{width: "100%"}}>

            {/* inputs */}
            <Grid item sm={8}>
              <Grid container alignItems="center" justify="center">

                {/* input nome */}
                <Grid container alignItems="center" style={{paddingBottom: 15}}>
                  <Grid item>
                    <FormLabel htmlFor="nome">
                      <Typography style={{fontSize: '1.5rem', paddingRight: 20, color: 'white'}}>
                        Nome
                      </Typography>
                    </FormLabel>
                  </Grid>
                  <Grid item xs>
                    <Input name="nome" id="nome" className={classes.textField} disableUnderline />
                  </Grid>
                </Grid>

                {/* input email */}
                <Grid container alignItems="center" style={{paddingBottom: 15}}>
                  <Grid item>
                    <FormLabel htmlFor="email">
                      <Typography style={{fontSize: '1.5rem', paddingRight: 20, color: 'white'}}>
                        Email
                      </Typography>
                    </FormLabel>
                  </Grid>
                  <Grid item xs>
                    <Input name="email" id="email" className={classes.textField} disableUnderline/>
                  </Grid>
                </Grid>

                {/* input telefone */}
                <Grid container alignItems="center" style={{paddingBottom: 15}}>
                  <Grid item>
                    <FormLabel htmlFor="telefone">
                      <Typography style={{fontSize: '1.5rem', paddingRight: 20, color: 'white'}}>
                        Telefone
                      </Typography>
                    </FormLabel>
                  </Grid>
                  <Grid item xs>
                    <Input name="telefone" id="telefone" className={classes.textField} disableUnderline/>
                  </Grid>
                </Grid>

                {/* input cargo */}
                <Grid container alignItems="center" style={{paddingBottom: 15}}>
                  <Grid item>
                    <FormLabel htmlFor="cargo">
                      <Typography style={{fontSize: '1.5rem', paddingRight: 20, color: 'white'}}>
                        Cargo
                      </Typography>
                    </FormLabel>
                  </Grid>
                  <Grid item xs>
                    <Input name="cargo" id="cargo" className={classes.textField} disableUnderline/>
                  </Grid>
                </Grid>

                {/* input área/empresa */}
                <Grid container alignItems="center" style={{paddingBottom: 15}}>
                  <Grid item>
                    <FormLabel htmlFor="area">
                      <Typography style={{fontSize: '1.5rem', paddingRight: 20, color: 'white'}}>
                        Área/Empresa
                      </Typography>
                    </FormLabel>
                  </Grid>
                  <Grid item xs>
                    <Input name="area" id="area" className={classes.textField} disableUnderline/>
                  </Grid>
                </Grid>

                {/* inputradio perfil */}
                <Grid container alignItems="center">
                  <Grid item>
                    <FormLabel>
                      <Typography style={{paddingRight: 20, fontSize: "1.5rem", color:"white"}}>
                        Perfil
                      </Typography>
                    </FormLabel>
                  </Grid>
                  <Grid item xs>
                    <RadioGroup row name="perfil" style={{color:"white"}}>
                      <FormControlLabel style={{paddingLeft: 5}} labelPlacement="end" value="ADM" control={<Radio/>} label="ADM"/>
                      <FormControlLabel style={{paddingLeft: 15}} labelPlacement="end" value="GER" control={<Radio/>} label="GER"/>
                      <FormControlLabel style={{paddingLeft: 15}} labelPlacement="end" value="USU" control={<Radio/>} label="USU"/>
                    </RadioGroup>
                  </Grid>
                </Grid>

                {/* upload assinatura */}
                <Grid container alignItems="center">
                <Grid item>
                  <FormLabel htmlFor="assinatura">
                    <Typography style={{fontSize: '1.5rem', paddingRight: 20, color: 'white'}}>
                      Assinatura
                    </Typography>
                  </FormLabel>
                </Grid>
                <Grid item xs>
                  <input name="assinatura" accept="image/*" style={{display: "none"}} id="assinatura" type="file"/>
                  <label htmlFor="assinatura">
                    <IconButton color="primary" aria-label="upload picture" component="span" className="no-margin">
                      <ImageSearch style={{color: "white", width: 50, height: 50}}/>
                    </IconButton>
                  </label>
                </Grid>
              </Grid>

              </Grid>
            </Grid>

            {/* button cadastrar */}
            <Grid container justify="flex-end" style={{paddingRight: 20}}>
              <Button type="submit" variant="contained" color="secondary" style={{borderRadius: 18}}>
                Cadastrar
              </Button>
            </Grid>

          </form>

        </Grid>
      </Grid>
    </Container>
  );
};

export default withStyles(styles, { withTheme: true })(Register);