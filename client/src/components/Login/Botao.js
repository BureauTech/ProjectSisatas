import { IconButton, makeStyles } from "@material-ui/core";
import { ArrowRightAlt } from "@material-ui/icons";

const style = makeStyles((theme) => ({
  icon: {
    color: "white",
    width: 60,
    height: 50,
  },
  btn: {
    backgroundColor: theme.palette.secondary.main,
    padding: "0px 20px",
    borderRadius: 25,
  },
}));

const Botao = (props) => {
  const { type, onClick } = props;
  const classes = style();
  return (
    <IconButton type={type ? type : null} className={classes.btn} onClick={onClick ? onClick : null}>
      <ArrowRightAlt className={classes.icon} />
    </IconButton>
  );
};

export default Botao;
