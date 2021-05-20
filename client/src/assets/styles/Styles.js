const styles = (theme) => ({
  grid: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "20px",
    //padding: "10px 25px",
    paddingTop: 10,
    //paddingLeft: 25,
  },

  textField: {
    backgroundColor: "white",
    borderRadius: "10px",
    color: "black",
    width: "100%",
    paddingLeft: "0.4rem",
    borderBottom: "none",
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
    margin: 10,
  },

  uploadFile: {
    color: "white",
    "&:hover": {
      color: "#26BAF4",
    },
  },

  radio: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  icon: {
    borderRadius: "100%",
    width: 20,
    height: 20,
    backgroundColor: "white",
  },

  checkedIcon: {
    backgroundColor: "#26BAF4",
  },

  hoverSecondary: {
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },

  secondary: {
    color: theme.palette.secondary.main,
  },
});

export { styles };
