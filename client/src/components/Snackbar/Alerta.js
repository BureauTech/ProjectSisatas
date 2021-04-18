import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useEffect, useState } from "react";

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
    <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        variant="filled"
        severity={sucesso ? "success" : "error"}
      >
        {sucesso ? sucesso : erro}
      </Alert>
    </Snackbar>
  );
};

export default Alerta;
