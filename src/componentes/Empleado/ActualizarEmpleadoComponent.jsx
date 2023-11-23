import React, { Component } from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom";
import servicioEmpleado from "../../servicios/ServicioEmpleado";

class ActualizarEmpleadoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      nombre: "",
      edad: "",
      correo: "",
      telefono: "",
      direccion: "",
      cedula: "",
      idRol: "",
    };
    this.changeIdHandler = this.changeIdHandler.bind(this);
    this.changeNombreHandler = this.changeNombreHandler.bind(this);
    this.changeEdadHandler = this.changeEdadHandler.bind(this);
    this.changeCorreoHandler = this.changeCorreoHandler.bind(this);
    this.changeTelefonoHandler = this.changeTelefonoHandler.bind(this);
    this.changeDireccionHandler = this.changeDireccionHandler.bind(this);
    this.changeCedulaHandler = this.changeCedulaHandler.bind(this);
    this.changeIdRolHandler = this.changeIdRolHandler.bind(this);
    this.actualizarEmpleado = this.actualizarEmpleado.bind(this);
  }

  actualizarEmpleado = (e) => {
    e.preventDefault();
    let empleado = {
      id: this.state.id,
      nombre: this.state.nombre,
      edad: this.state.edad,
      correo: this.state.correo,
      telefono: this.state.telefono,
      direccion: this.state.direccion,
      cedula: this.state.cedula,
      idRol: this.state.idRol,
    };
    console.log("empleado => " + JSON.stringify(empleado));
    servicioEmpleado
      .actualizarEmpleadoInfo(
        this.state.id,
        this.state.nombre,
        this.state.edad,
        this.state.correo,
        this.state.telefono,
        this.state.direccion,
        this.state.cedula
      )
      .then((res) => {
        window.location.href = "/empleados";
      });
  };

  changeIdHandler = (event) => {
    this.setState({ id: event.target.value });
  };

  changeNombreHandler = (event) => {
    this.setState({ nombre: event.target.value });
  };

  changeEdadHandler = (event) => {
    this.setState({ edad: event.target.value });
  };

  changeCorreoHandler = (event) => {
    this.setState({ correo: event.target.value });
  };

  changeTelefonoHandler = (event) => {
    this.setState({ telefono: event.target.value });
  };

  changeDireccionHandler = (event) => {
    this.setState({ direccion: event.target.value });
  };

  changeCedulaHandler = (event) => {
    this.setState({ cedula: event.target.value });
  };

  changeIdRolHandler = (event) => {
    this.setState({ idRol: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Actualizar Empleado</h3>
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
                    <label>Nombre:</label>
                    <input
                      placeholder="Nombre"
                      name="nombre"
                      className="form-control"
                      value={this.state.nombre}
                      onChange={this.changeNombreHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Edad:</label>
                    <input
                      placeholder="Edad"
                      name="edad"
                      className="form-control"
                      value={this.state.edad}
                      onChange={this.changeEdadHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Correo:</label>
                    <input
                      placeholder="Correo"
                      name="correo"
                      className="form-control"
                      value={this.state.correo}
                      onChange={this.changeCorreoHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Telefono:</label>
                    <input
                      placeholder="Telefono"
                      name="telefono"
                      className="form-control"
                      value={this.state.telefono}
                      onChange={this.changeTelefonoHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Direccion:</label>
                    <input
                      placeholder="Direccion"
                      name="direccion"
                      className="form-control"
                      value={this.state.direccion}
                      onChange={this.changeDireccionHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Cedula:</label>
                    <input
                      placeholder="Cedula"
                      name="cedula"
                      className="form-control"
                      value={this.state.cedula}
                      onChange={this.changeCedulaHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>IDRol:</label>
                    <input
                      placeholder="idRol"
                      name="idrol"
                      className="form-control"
                      value={this.state.idRol}
                      onChange={this.changeIdRolHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    style={{ marginTop: "10px" }}
                    onClick={this.actualizarEmpleado}
                  >
                    Guardar cambios del empleado
                  </button>

                  <Link to="/empleados">
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

export default ActualizarEmpleadoComponent;
