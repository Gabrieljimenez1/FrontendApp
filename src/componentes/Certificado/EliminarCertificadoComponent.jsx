import React, { Component } from "react";
import HeaderComponent from "../HeaderComponent";
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom";
import servicioCertificado from "../../servicios/ServicioCertificado";

export default class EliminarCertificadoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
    };
    this.changeIdHandler = this.changeIdHandler.bind(this);
    this.EliminarCertificado = this.EliminarCertificado.bind(this);
  }

  changeIdHandler = (event) => {
    this.setState({ id: event.target.value });
  };

  EliminarCertificado = (e) => {
    e.preventDefault();
    console.log("certificado => " + this.state.id);
    servicioCertificado.eliminarCertificado(this.state.id).then((res) => {
      window.location.href = "/certificados";
    });
  };

  render() {
    return (
      <div>
        <HeaderComponent />
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Eliminar Certificado</h3>
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

                  <button
                    className="btn btn-success"
                    style={{ marginTop: "10px" }}
                    onClick={this.eliminarCertificado}
                  >
                    Eliminar certificado
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
