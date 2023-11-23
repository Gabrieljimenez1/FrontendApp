import "./App.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./componentes/Login";
import PaginaInicial from "./componentes/PaginaInicial";

import ListaEmpleados from "./componentes/Empleado/ListaEmpleados";
import CrearEmpleadoComponent from "./componentes/Empleado/CrearEmpleadoComponent";
import ActualizarEmpleadoComponent from "./componentes/Empleado/ActualizarEmpleadoComponent";
import ActualizarRolEmpleadoComponent from "./componentes/Empleado/ActualizarRolEmpleadoComponent";
import EliminarEmpleadoComponent from "./componentes/Empleado/EliminarEmpleadoComponent";
import InformaciónEmpleadoComponent from "./componentes/Empleado/InformacionEmpleadoComponent";

import ListaCertificados from "./componentes/Certificado/ListaCertificados";
import CrearCertificadoComponent from "./componentes/Certificado/CrearCertificadoComponent";
import EliminarCertificadoComponent from "./componentes/Certificado/EliminarCertificadoComponent";
import InformacionCertificadoComponent from "./componentes/Certificado/InformacionCertificadoComponent";

import ListaRoles from "./componentes/Rol/ListaRoles";
import CrearRolComponent from "./componentes/Rol/CrearRolComponent";
import ActualizarRolComponent from "./componentes/Rol/ActualizarRolComponent";
import EliminarRolComponent from "./componentes/Rol/EliminarRolComponent";
import InformacionRolComponent from "./componentes/Rol/InformacionRolComponent";

import ListaPerfiles from "./componentes/Perfil/ListaPerfiles";
import CrearPerfiles from "./componentes/Perfil/CrearPerfilComponent";
import ActualizarPerfiles from "./componentes/Perfil/ActualizarPerfilComponent";
import EliminarPerfiles from "./componentes/Perfil/EliminarPerfilComponent";
import InformacionPerfiles from "./componentes/Perfil/InformacionPerfilComponent";

import FooterComponent from "./componentes/FooterComponent";


function App() {
  return (
    <div>
      <Router>
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
            <Route
              path="/actualizar-rol"
              element={<ActualizarRolComponent />}
            ></Route>
            <Route
              path="/eliminar-rol"
              element={<EliminarRolComponent />}
            ></Route>
            <Route
              path="/ver-rol"
              element={<InformacionRolComponent />}
            ></Route>
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
            <Route path="/crear-perfiles" element={<CrearPerfiles />}></Route>
            <Route path="/actualizar-perfiles" element={<ActualizarPerfiles />}></Route>
            <Route path="/ver-perfiles" element={<InformacionPerfiles />}></Route>
            <Route path="/eliminar-perfiles" element={<EliminarPerfiles />}></Route>
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
