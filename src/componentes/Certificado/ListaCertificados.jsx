import React, { Component } from "react";
import ServicioCertificado from "../../servicios/ServicioCertificado";
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom";

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
                <th>Descripcion</th>
                <th>Fecha de Expedicion</th>
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
        <div>
          <ul>
            <Link to="/ver-certificados">
              <button className="btn btn-primary"> Buscar por ID</button>
            </Link>
          </ul>
          <ul>
            <Link to="/crear-certificados">
              <button className="btn btn-primary"> Agregar Certificado</button>
            </Link>
          </ul>
          <ul>
            <Link to="/eliminar-certificados">
              <button className="btn btn-primary"> Eliminar Certificado</button>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default ListaCertificados;
