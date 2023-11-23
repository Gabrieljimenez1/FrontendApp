import React, { Component } from "react";
import HeaderComponent from "../HeaderComponent";
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom";
import servicioPerfil from "../../servicios/ServicioPerfil";

export default class EliminarPerfilComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
    };
    this.changeIdHandler = this.changeIdHandler.bind(this);
    this.eliminarPerfil = this.eliminarPerfil.bind(this);
  }

  changeIdHandler = (event) => {
    this.setState({ id: event.target.value });
  };

  eliminarPerfil = (e) => {
    e.preventDefault();
    console.log("perfil => " + this.state.id);
    servicioPerfil.eliminarPerfil(this.state.id).then((res) => {
      window.location.href = "/perfiles";
    });
  };

  render() {
    return (
      <div>
        <HeaderComponent />
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Eliminar Perfil</h3>
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
                    onClick={this.eliminarPerfil}
                  >
                    Eliminar Perfil
                  </button>

                  <Link to="/perfiles">
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