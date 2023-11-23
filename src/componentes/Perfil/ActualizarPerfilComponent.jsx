import React, { Component } from "react";
import HeaderComponent from "../HeaderComponent";
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom";
import ServicioPerfil from "../../servicios/ServicioPerfil";

class ActualizarPerfilComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      empleadoId: "",
      habilidades: "",
      años_de_experiencia: ""
    };
     this.changeIdHandler = this.changeIdHandler.bind(this);
    this.changeEmpleadoIdHandler = this.changeEmpleadoIdHandler.bind(this);
    this.changeHabilidadesHandler = this.changeHabilidadesHandler.bind(this);
    this.changeAños_de_experienciaHandler = this.changeAños_de_experienciaHandler.bind(this);
    this.crearPerfil = this.crearPerfil.bind(this);
    this.actualizarPerfil = this.actualizarPerfil.bind(this);
  }

  actualizarPerfil = (e) => {
    e.preventDefault();
    let perfil = {
      id: this.state.id,
      empleadoId: this.state.empleadoId,
      habilidades: this.state.habilidades,
      años_de_experiencia: this.state.años_de_experiencia,
    };
    console.log("perfil => " + JSON.stringify(perfil));
    ServicioPerfil
      .actualizarPerfil(
       this.state.id,
       this.state.empleadoId,
       this.state.habilidades,
       this.state.años_de_experiencia,
      )
      .then((res) => {
        window.location.href = "/perfiles";
      });
  };

  changeIdHandler = (event) => {
    this.setState({ id: event.target.value });
  };

  changeEmpleadoIdHandler = (event) => {
    this.setState({ empleadoId: event.target.value });
  };

  changeHabilidadesHandler = (event) => {
    this.setState({ habilidades: event.target.value });
  };

  changeAños_de_ExperienciaHandler = (event) => {
    this.setState({ años_de_experiencia: event.target.value });
  };
  render() {
    return (
      <div>
        <HeaderComponent />
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Agregar Perfil</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>ID:</label>
                    <input
                      placeholder="ID"
                      name="id"
                      className="form-control"
                      value={this.state.id}
                      onChange={this.changeIdHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Empleado ID:</label>
                    <input
                      placeholder="Empleado ID"
                      name="empleadoId"
                      className="form-control"
                      value={this.state.empleadoId}
                      onChange={this.changeEmpleadoIdHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Haabilidades:</label>
                    <input
                      placeholder="Habilidades"
                      name="habilidades"
                      className="form-control"
                      value={this.state.habilidades}
                      onChange={this.changeHabilidadesHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Años de Experincia:</label>
                    <input
                      placeholder="Años de Experiencia"
                      name="años_de_experiencia"
                      className="form-control"
                      value={this.state.años_de_experiencia}
                      onChange={this.changeAños_de_experienciaHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    style={{ marginTop: "10px" }}
                    onClick={this.crearEmpleado}
                  >
                    Guardar perfil
                  </button>

                  <Link to="/perfiles">
                    <button
                      className="btn btn-danger"
                      style={{ marginLeft: "10px", marginTop: "10px" }}
                    >
                      Regresar
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ActualizarPerfilComponent;