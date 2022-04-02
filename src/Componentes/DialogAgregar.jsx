import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";

const DialogAgregar = (props) => {
  const { open, onClose, array, agregarArray } = props;
  const [habilidad, setHabilidad] = React.useState();
  const [descripcion, setDescripcion] = React.useState();
  const handleClose = () => {
    onClose();
  };

  const handleAgregar = () => {
    if (habilidad.length > 0 && descripcion.length > 0) {
      /* createData(habilidad,descripcion); */
      agregarArray([[habilidad, descripcion]]);
      console.log(array);
      setTimeout(() => {
        agregarArray([]);
        setHabilidad("");
        setDescripcion("");
        onClose();
      }, 100);
    } else {
      alert("Complete todos los recuadros");
    }
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Agregar nueva habilidad"}
      </DialogTitle>
      <DialogContent>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <TextField
              required
              id="outlined-required"
              label="Habilidad"
              onChange={(e) => {
                setHabilidad(e.target.value);
              }}
            />
            <TextField
              minRows={5}
              multiline
              required
              id="outlined-required"
              label="Descripción"
              onChange={(e) => {
                setDescripcion(e.target.value);
              }}
            />
          </div>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleAgregar} autoFocus>
          Aceptar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default DialogAgregar;
