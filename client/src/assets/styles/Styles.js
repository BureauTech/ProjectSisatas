const styles = (theme) => ({
  grid: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "20px",
    padding: 15,
    paddingLeft: 25,
  },
  textField: {
    backgroundColor: "white",
    borderRadius: "10px",
    color: "black",
    width: "100%",
    paddingLeft: "0.4rem",
  },
  biggerText: {
    color: "white",
    fontFamily: "Montserrat",
    fontSize: "2.5rem",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: "3.0625rem",
    letterSpacing: "0em",
    textAlign: "left",
  },
  normalText: {
    color: "white",
    fontFamily: "Montserrat",
    fontSize: "1.875rem",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: "2rem",
    letterSpacing: "0em",
    textAlign: "left",
  },
  rowMargin: {
    margin: 20,
  },
});

export { styles };
