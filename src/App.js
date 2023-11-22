import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FooterComponent from "./componentes/FooterComponent";
import HeaderComponent from "./componentes/HeaderComponent";
import ListaEmpleados from "./componentes/ListaEmpleados";
import ListaRoles from "./componentes/ListaRoles";
import ListaCertificados from "./componentes/ListaCertificados";
import ListaPerfiles from "./componentes/ListaPerfiles";
import CrearEmpleadoComponent from "./componentes/CrearEmpleadoComponent";
import ActualizarEmpleadoComponent from "./componentes/ActualizarEmpleadoComponent";
import EliminarEmpleadoComponent from "./componentes/EliminarEmpleadoComponent";
import ActualizarRolEmpleadoComponent from "./componentes/ActualizarRolEmpleadoComponent";
import PaginaInicial from "./componentes/PaginaInicial";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<PaginaInicial />}></Route>
            <Route path="/empleados" element={<ListaEmpleados />}></Route>
            <Route path="/pagina-inicial" element={<PaginaInicial />}></Route>
            <Route
              path="/crear-empleado"
              element={<CrearEmpleadoComponent />}
            ></Route>
            <Route
              path="/actualizar-empleado"
              element={<ActualizarEmpleadoComponent />}
            ></Route>
            <Route
              path="/actualizar-rol-empleado"
              element={<ActualizarRolEmpleadoComponent />}
            ></Route>
            <Route
              path="/eliminar-empleado"
              element={<EliminarEmpleadoComponent />}
            ></Route>
            <Route path="/roles" element={<ListaRoles />}></Route>
            <Route path="/certificados" element={<ListaCertificados />}></Route>
            <Route path="/perfiles" element={<ListaPerfiles />}></Route>
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
