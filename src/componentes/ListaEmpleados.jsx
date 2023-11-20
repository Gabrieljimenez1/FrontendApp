import React, { Component } from "react";
import ServicioEmpleado from "../servicios/ServicioEmpleado";

class ListaEmpleados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empleados: [],
    };
  }

  componentDidMount() {
    ServicioEmpleado.getEmpleadoTodos().then((res) => {
      this.setState({ empleados: res.data });
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Lista Empleados</h2>
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
      </div>
    );
  }
}

export default ListaEmpleados;
