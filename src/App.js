import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FooterComponent from "./componentes/FooterComponent";
import HeaderComponent from "./componentes/HeaderComponent";
import Login from "./componentes/Login";
import ListaEmpleados from "./componentes/Empleado/ListaEmpleados";
import ListaRoles from "./componentes/Rol/ListaRoles";
import ListaCertificados from "./componentes/Certificado/ListaCertificados";
import ListaPerfiles from "./componentes/Perfil/ListaPerfiles";
import CrearEmpleadoComponent from "./componentes/Empleado/CrearEmpleadoComponent";
import ActualizarEmpleadoComponent from "./componentes/Empleado/ActualizarEmpleadoComponent";
import EliminarEmpleadoComponent from "./componentes/Empleado/EliminarEmpleadoComponent";
import ActualizarRolEmpleadoComponent from "./componentes/Empleado/ActualizarRolEmpleadoComponent";
import PaginaInicial from "./componentes/PaginaInicial";
import InformacionEmpleadoComponent from "./componentes/Empleado/InformacionEmpleadoComponent";
import CrearRolComponent from "./componentes/Rol/CrearRolComponent";
import ActualizarRolComponent from "./componentes/Rol/ActualizarRolComponent";
import EliminarRolComponent from "./componentes/Rol/EliminarRolComponent";
import InformacionRolComponent from "./componentes/Rol/InformacionRolComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Login />}></Route>
            <Route path="/pagina-inicial" element={<PaginaInicial />}></Route>
            <Route path="/empleados" element={<ListaEmpleados />}></Route>
            <Route path="/crear-empleado" element={<CrearEmpleadoComponent />}></Route>
            <Route path="/actualizar-empleado" element={<ActualizarEmpleadoComponent />}></Route>
            <Route path="/actualizar-rol-empleado" element={<ActualizarRolEmpleadoComponent />}></Route>
            <Route path="/eliminar-empleado" element={<EliminarEmpleadoComponent />}></Route>
            <Route path="/ver-empleado/" element={<InformacionEmpleadoComponent />}></Route>
            <Route path="/roles" element={<ListaRoles />}></Route>
            <Route path="/agregar-rol" element={<CrearRolComponent />}></Route>
            <Route path="/actualizar-rol" element={<ActualizarRolComponent />}></Route>
            <Route path="/eliminar-rol" element={<EliminarRolComponent />}></Route>
            <Route path="/ver-rol" element={<InformacionRolComponent />}></Route>
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
