import React, { Component } from "react";
import ServicioEmpleado from "../../servicios/ServicioEmpleado";
// eslint-disable-next-line
import {BrowserRouter as Router, Link } from "react-router-dom";

class ListaEmpleados extends Component {
  constructor(props) {
    super(props);

    this.state = {
      empleados: [],
    };
    this.crearEmpleado = this.crearEmpleado.bind(this);
  }
  componentDidMount() {
    ServicioEmpleado.getEmpleadoTodos().then((res) => {
      this.setState({ empleados: res.data });
    });
  }

  crearEmpleado(empleadoId) {
    window.location.href = `/crear-empleado/${empleadoId}`;
  }

  

  render() {
    return (
      <div>
        <h2 className="text-center">Lista Empleados</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={() => this.crearEmpleado("1367")}>
            Agregar Empleado
          </button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <tbody>
              <tr>
                <th>Empleado ID</th>
                <th>Empleado Nombre</th>
                <th>Edad Empleado</th>
                <th>Correo Empleado</th>
                <th>Telefono Empleado</th>
                <th>Direccion Empleado</th>
                <th>Cedula Empleado</th>
                <th>ID_Rol Empleado</th>
                <th>Acciones</th>
              </tr>
            </tbody>

            <tbody>
              {this.state.empleados.map((empleado) => (
                <tr key={empleado.id}>
                  <td>{empleado.id}</td>
                  <td>{empleado.nombre}</td>
                  <td>{empleado.edad}</td>
                  <td>{empleado.correo}</td>
                  <td>{empleado.telefono}</td>
                  <td>{empleado.direccion}</td>
                  <td>{empleado.cedula}</td>
                  <td>{empleado.idRol}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <ul>
            <Link to="/ver-empleado">
              <button className="btn btn-primary"> Buscar por ID</button>
            </Link>
          </ul>
          <ul>
            <Link to="/crear-empleado">
              <button className="btn btn-primary"> Agregar Empleado</button>
            </Link>
          </ul>
          <ul>
            <Link to="/actualizar-empleado">
              <button className="btn btn-primary">
                Actualizar Informacion Personal
              </button>
            </Link>
          </ul>
          <ul>
            <Link to="/actualizar-rol-empleado">
              <button className="btn btn-primary"> Actualizar Rol</button>
            </Link>
          </ul>
          <ul>
            <Link to="/eliminar-empleado">
              <button className="btn btn-primary"> Eliminar Empleado</button>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default ListaEmpleados;
