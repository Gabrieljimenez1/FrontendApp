import React, { Component } from "react";
import HeaderComponent from "../HeaderComponent";
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom";
import servicioCertificado from "../../servicios/ServicioCertificado";
export default class CrearCertificadoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      idEmpleado: "",
      tipo: "",
      descripcion: "",
      fechaExpedicion: "",
      entidadExpedidora: "",
    };
    this.changeIdHandler = this.changeIdHandler.bind(this);
    this.changeEmpleadoIdHandler = this.changeEmpleadoIdHandler.bind(this);
    this.changeTipoHandler = this.changeTipoHandler.bind(this);
    this.changeDescripcionHandler = this.changeDescripcionHandler.bind(this);
    this.changeFecha_de_expedicionHandler =
      this.changeFecha_de_expedicionHandler.bind(this);
    this.changeEntidad_expedidoraHandler =
      this.changeEntidad_expedidoraHandler.bind(this);
    this.crearCertificado = this.crearCertificado.bind(this);
  }

  crearCertificado = (e) => {
    e.preventDefault();
    let certificado = {
      id: this.state.id,
      idEmpleado: this.state.idEmpleado,
      tipo: this.state.tipo,
      descripcion: this.state.descripcion,
      fechaExpedicion: this.state.fechaExpedicion,
      entidadExpedidora: this.state.entidadExpedidora,
    };
    console.log("certificado => " + JSON.stringify(certificado));

    servicioCertificado.crearCertificado(certificado).then((res) => {
      //window.location.href = "/certificados";
    });
  };

  changeIdHandler = (event) => {
    this.setState({ id: event.target.value });
  };

  changeEmpleadoIdHandler = (event) => {
    this.setState({ idEmpleado: event.target.value });
  };

  changeTipoHandler = (event) => {
    this.setState({ tipo: event.target.value });
  };

  changeDescripcionHandler = (event) => {
    this.setState({ descripcion: event.target.value });
  };

  changeFecha_de_expedicionHandler = (event) => {
    this.setState({ fechaExpedicion: event.target.value });
  };

  changeEntidad_expedidoraHandler = (event) => {
    this.setState({ entidadExpedidora: event.target.value });
  };

  render() {
    return (
      <div>
        <HeaderComponent />
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Agregar Certificado</h3>
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
                      name="empleado ID"
                      className="form-control"
                      value={this.state.empleadoId}
                      onChange={this.changeEmpleadoIdHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Tipo:</label>
                    <input
                      placeholder="Tipo"
                      name="tipo"
                      className="form-control"
                      value={this.state.tipo}
                      onChange={this.changeTipoHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Descripcion: </label>
                    <input
                      placeholder="Descripcion"
                      name="descripcion"
                      className="form-control"
                      value={this.state.descripcion}
                      onChange={this.changeDescripcionHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Fecha de Expedicion:</label>
                    <input
                      placeholder="Fecha de Expedicion"
                      name="fecha de expedicion"
                      className="form-control"
                      value={this.state.fecha_de_expedicion}
                      onChange={this.changeFecha_de_expedicionHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label>Entidad Expedidora:</label>
                    <input
                      placeholder="Entidad Expedidora"
                      name="direccion"
                      className="form-control"
                      value={this.state.direccion}
                      onChange={this.changeEntidad_expedidoraHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    style={{ marginTop: "10px" }}
                    onClick={this.crearCertificado}
                  >
                    Guardar Certificado
                  </button>

                  <Link to="/certificados">
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
