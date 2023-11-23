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
      idEmpleado: "",
      habilidades: "",
      anosExperiencia: ""
    };
    this.changeIdHandler = this.changeIdHandler.bind(this);
    this.changeEmpleadoIdHandler = this.changeEmpleadoIdHandler.bind(this);
    this.changeHabilidadesHandler = this.changeHabilidadesHandler.bind(this);
    this.changeAños_de_ExperienciaHandler = this.changeAños_de_ExperienciaHandler.bind(this);
    this.actualizarPerfil = this.actualizarPerfil.bind(this);
  }

  actualizarPerfil = (e) => {
    e.preventDefault();
    let perfil = {
      id: this.state.id,
      idEmpleado: this.state.idEmpleado,
      habilidades: this.state.habilidades,
      anosExperiencia: this.state.anosExperiencia
    };
    console.log("perfil => " + JSON.stringify(perfil));
    ServicioPerfil
      .actualizarPerfil(
       this.state.id,
       this.state.idEmpleado,
       this.state.habilidades,
       this.state.anosExperiencia
      )
      .then((res) => {
        window.location.href = "/perfiles";
      });
  };

  changeIdHandler = (event) => {
    this.setState({ id: event.target.value });
  };

  changeEmpleadoIdHandler = (event) => {
    this.setState({ idEmpleado: event.target.value });
  };

  changeHabilidadesHandler = (event) => {
    this.setState({ habilidades: event.target.value });
  };

  changeAños_de_ExperienciaHandler = (event) => {
    this.setState({ anosExperiencia: event.target.value });
  };
  render() {
    return (
      <div>
        <HeaderComponent />
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Actualizar Perfil</h3>
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
                      value={this.state.idEmpleado}
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
                      value={this.state.anosExperiencia}
                      onChange={this.changeAños_de_ExperienciaHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    style={{ marginTop: "10px" }}
                    onClick={this.actualizarPerfil}
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