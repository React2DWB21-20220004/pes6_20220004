import * as React from "react";
import Button from "@mui/material/Button";
import PostAddIcon from "@mui/icons-material/PostAdd";
import StorageIcon from "@mui/icons-material/Storage";
import Stack from "@mui/material/Stack";
import Tabla from "./Tabla";
import DropzoneDialog from "./Dialogs";
const Habilidades = (props) => {
  const [arrayHabilidades, setArrayHabilidades] = React.useState([]);
  const [openDropzone, setOpenDropzone] = React.useState(false);
  return (
    <section>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Habilidades Personales</h2>
        <div style={{ margin: "auto 0" }}>
          <Stack direction="row" spacing={2}>
            <Button
              onClick={() => {
                setOpenDropzone(true);
              }}
              variant="contained"
              startIcon={<StorageIcon />}
            >
              Carga Masiva
            </Button>
            <DropzoneDialog
              open={openDropzone}
              onClose={() => {
                setOpenDropzone(false);
              }}
              array={arrayHabilidades}
              agregarArray={(newArray) => {
                setArrayHabilidades(newArray);
              }}
            />
            <Button variant="contained" startIcon={<PostAddIcon />}>
              Agregar
            </Button>
          </Stack>
        </div>
      </div>
      <Tabla array={arrayHabilidades} />
    </section>
  );
};
export default Habilidades;