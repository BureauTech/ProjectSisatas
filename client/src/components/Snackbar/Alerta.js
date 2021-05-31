import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useEffect, useState } from "react";

/**
 * Arquivo para o elemento de Alerta  
 * Deve ser passado como props:  
 * sucesso = String (mensagem de sucesso, vazia ou false em caso de erro)  
 * erro = String (mensagem de erro, vazia ou false em caso de sucesso)  
 * isOpen = Boolean  
 * setIsOpen = React set state function
 * @author Denis Lima
 * @param {any} props props
 * @returns Retorna o elemento de Alerta (snackbar)
 */
const Alerta = (props) => {
  const [open, setOpen] = useState(false);
  const { sucesso, erro, isOpen, setIsOpen } = props;

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen, sucesso, erro]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setIsOpen(false);
  };
  return (
    <Snackbar open={open} autoHideDuration={7000} onClose={handleClose}>
      <Alert onClose={handleClose} variant="filled" severity={sucesso ? "success" : "error"}>
        {sucesso ? sucesso : erro}
      </Alert>
    </Snackbar>
  );
};

export default Alerta;
