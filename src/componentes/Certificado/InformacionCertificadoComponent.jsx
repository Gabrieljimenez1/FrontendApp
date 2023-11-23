import React, { Component } from "react";
import servicioCertificado from "../../servicios/ServicioCertificado";
import HeaderComponent from "../HeaderComponent";
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class InformacionCertificadoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "0",
      certificado: [],
    };

    this.changeIdHandler = this.changeIdHandler.bind(this);
    this.mostrarCertificado = this.mostrarCertificado.bind(this);
    this.cargarCertificado = this.cargarCertificado.bind(this);
    this.test = this.test.bind(this);
  }

  test = (e) => {
    e.preventDefault();
    console.log(this.state.certificado);
    console.log(this.state.certificado[0].id);
  };

  changeIdHandler = (event) => {
    this.setState({ id: event.target.value });
  };

  cargarCertificado = () => {
    if (this.state.id !== "") {
      servicioCertificado.getCertificadoFromId(this.state.id).then((res) => {
        this.setState({ certificado: res.data });
      });
    }
  };

  mostrarCertificado = (e) => {
    e.preventDefault();
    this.cargarCertificado();
  };

  render() {
    return (
      <div>
        <HeaderComponent />
        <div>
          <div className="container">
            <div className="row">
              <div className="card col-md-6 offset-md-3 offset-md-3">
                <h3 className="text-center">Mostrar detalles Certificado</h3>
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
                        onClick={this.mostrarCertificado}
                      >
                        Mostrar Certificados
                      </button>
                    </div>
                  </form>
                </div>
                <div className="card-body">
                  <div className="row">
                    <label>ID certificado:</label>
                    <div>
                      {this.state.certificado.length !== 0
                        ? this.state.certificado[0].id
                        : "ID inexistente"}
                    </div>
                  </div>
                  <div className="row">
                    <label>Empleado ID:</label>
                    <div>
                      {this.state.certificado.length !== 0
                        ? this.state.certificado[0].idEmpleado
                        : "ID inexistente"}
                    </div>
                  </div>
                  <div className="row">
                    <label>Descripcion</label>
                    <div>
                      {this.state.certificado.length !== 0
                        ? this.state.certificado[0].descripcion
                        : "ID inexistente"}
                    </div>
                  </div>
                  <div className="row">
                    <label>Fecha de expedicion:</label>
                    <div>
                      {this.state.certificado.length !== 0
                        ? this.state.certificado[0].fechaExpedicion
                        : "ID inexistente"}
                    </div>
                  </div>
                  <div className="row">
                    <label>Entidad expedidora:</label>
                    <div>
                      {this.state.certificado.length !== 0
                        ? this.state.certificado[0].entidadExpedidora
                        : "ID inexistente"}
                    </div>
                  </div>
                  <br />

                  <Link to="/certificados">
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
