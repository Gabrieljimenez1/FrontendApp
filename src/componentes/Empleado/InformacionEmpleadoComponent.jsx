import React, { Component } from "react";
import servicioEmpleado from "../../servicios/ServicioEmpleado";
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class InformacionEmpleadoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "0",
      empleado: [],
    };

    this.changeIdHandler = this.changeIdHandler.bind(this);
    this.mostrarEmpleado = this.mostrarEmpleado.bind(this);
    this.cargarEmpleado = this.cargarEmpleado.bind(this);
    this.test = this.test.bind(this);
  }

  test = (e) => {
    e.preventDefault();
    console.log(this.state.empleado);
    console.log(this.state.empleado[0].id);
  };

  changeIdHandler = (event) => {
    this.setState({ id: event.target.value });
  };

  cargarEmpleado = () => {
    if (this.state.id !== "") {
      servicioEmpleado.getEmpleadoFromId(this.state.id).then((res) => {
        this.setState({ empleado: res.data });
      });
    }
  };

  mostrarEmpleado = (e) => {
    e.preventDefault();
    this.cargarEmpleado();
  };

  render() {
    return (
      <div>
        <div>
          <div className="container">
            <div className="row">
              <div className="card col-md-6 offset-md-3 offset-md-3">
                <h3 className="text-center">Mostrar detalles Empleado</h3>
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
                      <br />
                      <button
                        className="btn btn-success"
                        style={{ marginTop: "10px" }}
                        onClick={this.mostrarEmpleado}
                      >
                        Mostrar empleado
                      </button>
                    </div>
                  </form>
                </div>
                <div className="card-body">
                  <div className="row">
                    <label>Nombre del empleado:</label>
                    <div>
                      {this.state.empleado.length !== 0
                        ? this.state.empleado[0].nombre
                        : "ID inexistente"}
                    </div>
                  </div>
                  <div className="row">
                    <label>Edad del empleado:</label>
                    <div>
                      {this.state.empleado.length !== 0
                        ? this.state.empleado[0].edad
                        : "ID inexistente"}
                    </div>
                  </div>
                  <div className="row">
                    <label>Correo del empleado:</label>
                    <div>
                      {this.state.empleado.length !== 0
                        ? this.state.empleado[0].correo
                        : "ID inexistente"}
                    </div>
                  </div>
                  <div className="row">
                    <label>Telefono del empleado:</label>
                    <div>
                      {this.state.empleado.length !== 0
                        ? this.state.empleado[0].telefono
                        : "ID inexistente"}
                    </div>
                  </div>
                  <div className="row">
                    <label>Direccion del empleado:</label>
                    <div>
                      {this.state.empleado.length !== 0
                        ? this.state.empleado[0].direccion
                        : "ID inexistente"}
                    </div>
                  </div>
                  <div className="row">
                    <label>Cedula del empleado:</label>
                    <div>
                      {this.state.empleado.length !== 0
                        ? this.state.empleado[0].cedula
                        : "ID inexistente"}
                    </div>
                  </div>
                  <div className="row">
                    <label>ID_Rol del empleado:</label>
                    <div>
                      {this.state.empleado.length !== 0
                        ? this.state.empleado[0].idRol
                        : "ID inexistente"}
                    </div>
                  </div>
                  <br />

                  <Link to="/empleados">
                    <button
                      className="btn btn-danger"
                      style={{ marginLeft: "10px" }}
                    >
                      Regresar
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
