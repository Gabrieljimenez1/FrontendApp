import "./App.css";
import FooterComponent from "./componentes/FooterComponent";
import HeaderComponent from "./componentes/HeaderComponent";
import ListaEmpleados from "./componentes/ListaEmpleados";

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="container">
        <ListaEmpleados />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
