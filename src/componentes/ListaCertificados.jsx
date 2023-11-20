import React, { Component } from "react";
import ServicioCertificado from "../servicios/ServicioCertificado";

class ListaCertificados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      certificados: [],
    };
  }

  componentDidMount() {
    ServicioCertificado.getCertificadoTodos().then((res) => {
      this.setState({ certificados: res.data });
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Lista Certificados</h2>
        <div className="row">
          <table className="table table-striped table-bordered">
            <tbody>
              <tr>
                <th>Certificado ID</th>
                <th>Empleado ID</th>
                <th>Tipo</th>
                <th>Descripción</th>
                <th>Fecha de Expedición</th>
                <th>Entidad Expedidora</th>
              </tr>
            </tbody>

            <tbody>
              {this.state.certificados.map((certificado) => (
                <tr key={certificado.id}>
                  <td>{certificado.id}</td>
                  <td>{certificado.idEmpleado}</td>
                  <td>{certificado.tipo}</td>
                  <td>{certificado.descripcion}</td>
                  <td>{certificado.fechaExpedicion}</td>
                  <td>{certificado.entidadExpedidora}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListaCertificados;
