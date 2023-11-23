import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FooterComponent from "./componentes/FooterComponent";
import HeaderComponent from "./componentes/HeaderComponent";
import ListaEmpleados from "./componentes/Empleado/ListaEmpleados";
import ListaRoles from "./componentes/Rol/ListaRoles";
import ListaCertificados from "./componentes/Certificado/ListaCertificados";
import CrearCertificadoComponent from "./componentes/Certificado/CrearCertificadoComponent";
import EliminarCertificadoComponent from "./componentes/Certificado/EliminarCertificadoComponent";
import InformacionCertificadoComponent from "./componentes/Certificado/InformacionCertificadoComponent";
import ListaPerfiles from "./componentes/Perfil/ListaPerfiles";
import CrearEmpleadoComponent from "./componentes/Empleado/CrearEmpleadoComponent";
import ActualizarEmpleadoComponent from "./componentes/Empleado/ActualizarEmpleadoComponent";
import EliminarEmpleadoComponent from "./componentes/Empleado/EliminarEmpleadoComponent";
import ActualizarRolEmpleadoComponent from "./componentes/Empleado/ActualizarRolEmpleadoComponent";
import PaginaInicial from "./componentes/PaginaInicial";
import InformaciónEmpleadoComponent from "./componentes/Empleado/InformacionEmpleadoComponent";
import CrearRolComponent from "./componentes/Rol/CrearRolComponent";
import Login from "./componentes/Login";

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
            <Route
              path="/ver-empleado/"
              element={<InformaciónEmpleadoComponent />}
            ></Route>
            <Route path="/roles" element={<ListaRoles />}></Route>
            <Route path="/agregar-rol" element={<CrearRolComponent />}></Route>
            <Route path="/certificados" element={<ListaCertificados />}></Route>
            <Route
              path="/crear-certificados"
              element={<CrearCertificadoComponent />}
            ></Route>
            <Route
              path="/eliminar-certificados"
              element={<EliminarCertificadoComponent />}
            ></Route>
            <Route
              path="/ver-certificados"
              element={<InformacionCertificadoComponent />}
            ></Route>
            <Route path="/perfiles" element={<ListaPerfiles />}></Route>
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
