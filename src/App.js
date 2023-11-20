import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FooterComponent from "./componentes/FooterComponent";
import HeaderComponent from "./componentes/HeaderComponent";
import ListaEmpleados from "./componentes/ListaEmpleados";
import ListaRoles from "./componentes/ListaRoles";
import ListaCertificados from "./componentes/ListaCertificados";
import ListaPerfiles from "./componentes/ListaPerfiles";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<ListaEmpleados />}></Route>
            <Route path="/empleados" element={<ListaEmpleados />}></Route>
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
