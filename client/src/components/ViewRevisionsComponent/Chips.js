import { Avatar, Chip, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

const Chips = (props) => {
  const classes = useStyles();
  const { participantes, filtro } = props;

  return (
    <div className={classes.root}>
      {participantes.length &&
        participantes
          .filter((participante) => participante.status === filtro)
          .map((pessoa) => <Chip avatar={<Avatar>{pessoa.nome[0]}</Avatar>} label={pessoa.nome} color="secondary" />)}
    </div>
  );
};

export default Chips;
