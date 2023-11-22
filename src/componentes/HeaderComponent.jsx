import React, { Component } from "react";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div style={{ marginRight: "10px", marginLeft: "8px" }}>
              <a href="/pagina-inicial" className="nav-brand">
                RH Manager App
              </a>
            </div>
            <div style={{ marginRight: "10px" }}>
              <a href="/empleados" className="nav-brand">
                Empleados
              </a>
            </div>
            <div style={{ marginRight: "10px" }}>
              <a href="/roles" className="nav-brand">
                Roles
              </a>
            </div>
            <div style={{ marginRight: "10px" }}>
              <a href="/perfiles" className="nav-brand">
                Perfiles
              </a>
            </div>
            <div>
              <a href="/certificados" className="nav-brand">
                Certificados
              </a>
            </div>
            <div style={{ marginLeft: "1380px" }}>
              <a href="/login" className="nav-brand">
                Inicio de Sesion
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
