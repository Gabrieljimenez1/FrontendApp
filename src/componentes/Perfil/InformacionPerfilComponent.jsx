import React, { Component } from "react";
import ServicioPerfil from "../../servicios/ServicioPerfil";
import HeaderComponent from "../HeaderComponent";
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class InformacionPerfilComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "0",
      perfil: [],
    };

    this.changeIdHandler = this.changeIdHandler.bind(this);
    this.mostrarPerfil = this.mostrarPerfil.bind(this);
    this.cargarPerfil = this.cargarPerfil.bind(this);
    this.test = this.test.bind(this);
  }

  test = (e) => {
    e.preventDefault();
    console.log(this.state.perfil);
    console.log(this.state.perfil[0].id);
  };

  changeIdHandler = (event) => {
    this.setState({ id: event.target.value });
  };

  cargarPerfil = () => {
    if (this.state.id !== "") {
      ServicioPerfil.getPerfilFromId(this.state.id).then((res) => {
        this.setState({ perfil: res.data });
      });
    }
  };

  mostrarPerfil = (e) => {
    e.preventDefault();
    this.cargarPerfil();
  };

  render() {
    return (
      <div>
        <HeaderComponent />
        <div>
          <div className="container">
            <div className="row">
              <div className="card col-md-6 offset-md-3 offset-md-3">
                <h3 className="text-center">Mostrar detalles Perfiles</h3>
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
                        onClick={this.mostrarPerfil}
                      >
                        Mostrar perfil
                      </button>
                    </div>
                  </form>
                </div>
                <div className="card-body">
                  <div className="row">
                    <label>Perfil ID:</label>
                    <div>
                      {this.state.perfil.length !== 0
                        ? this.state.perfil[0].id
                        : "ID inexistente"}
                    </div>
                  </div>
                  <div className="row">
                    <label>Empleado ID:</label>
                    <div>
                      {this.state.perfil.length !== 0
                        ? this.state.perfil[0].idEmpleado
                        : "ID inexistente"}
                    </div>
                  </div>
                  <div className="row">
                    <label>Habilidades:</label>
                    <div>
                      {this.state.perfil.length !== 0
                        ? this.state.perfil[0].habilidades
                        : "ID inexistente"}
                    </div>
                  </div>
                  <div className="row">
                    <label>Años de Experiencia:</label>
                    <div>
                      {this.state.perfil.length !== 0
                        ? this.state.perfil[0].tiempoExperiencia
                        : "ID inexistente"}
                    </div>
                  </div>
                  <br />

                  <Link to="/perfiles">
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