import React, { Component } from "react";
import ServicioEmpleados from "../servicios/ServicioEmpleados";

class ListaEmpleados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empleados: [],
    };
  }

  componentDidMount() {
    ServicioEmpleados.getEmpleados().then((res) => {
      this.setState({ empleados: res.data });
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Lista Empleados</h2>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thread>
              <tr>
                <th>Empleado ID</th>
                <th>Empleado Nombre</th>
                <th>Edad Empleado</th>
                <th>Correo Empleado</th>
                <th>Telefono Empleado</th>
                <th>Direccion Empleado</th>
                <th>Cedula Empleado</th>
                <th>ID_Rol Empleado</th>
                <th>Certificados Empleado</th>
              </tr>
            </thread>

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
                  <td>{empleado.id_rol}</td>
                  <td>{empleado.certificados}</td>
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
