import { FormLabel, Input, Typography, withStyles } from "@material-ui/core";
import { styles } from "../../assets/styles/Styles";

const InputLogin = (props) => {
  const { classes, Icone, label, type, required, placeholder, id, setValue, value } = props;
  return (
    <>
      <FormLabel htmlFor={id ? id : ""}>
        <Typography className={classes.normalText} style={{ fontSize: "1.5rem", marginBottom: 10 }}>
          {label}
        </Typography>
      </FormLabel>
      <Input
        style={{ paddingLeft: 10, marginBottom: 20 }}
        type={type}
        id={id ? id : ""}
        className={classes.textField}
        endAdornment={<Icone style={{ paddingRight: 10 }} className={classes.secondary} />}
        required={required ? required : false}
        placeholder={placeholder ? placeholder : ""}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        // eslint-disable-next-line no-useless-escape
        inputProps={type === 'password' ? { pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{8,30}$" } : {}}
        
      />
    </>
  );
};

export default withStyles(styles, { withTheme: true })(InputLogin);
