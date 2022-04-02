import logo from "./logo.svg";
import "./App.css";
import BarraNavegacion from "./Componentes/Navbar";
import Habilidades from "./Componentes/Habilidades";

function App() {
  return (
    <BarraNavegacion>
      <Habilidades />
    </BarraNavegacion>
  );
}

export default App;
