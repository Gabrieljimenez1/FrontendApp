import React, { Component } from 'react'
import ServicioAuth from "../servicios/ServicioAuth";


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      pass: "",
    };
    this.changeUserHandler = this.changeUserHandler.bind(this);
    this.changePassHandler = this.changePassHandler.bind(this);
    this.autenticar = this.autenticar.bind(this)

  }

  autenticar = async (e) => {
    e.preventDefault();
    var isAuthenticated = await ServicioAuth.testAuth(this.state.user, this.state.pass)
    console.log("Is auth " + isAuthenticated)
    if (isAuthenticated) {
      window.location.href = "/pagina-inicial";
    } else {
      alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }
  }

  changeUserHandler = (event) => {
    this.setState({ user: event.target.value });
  }

  changePassHandler = (event) => {
    this.setState({ pass: event.target.value });
  }

  render() {
    return (
      <div className="Login">
        <h1>Página de inicio de sesion</h1>
        <form>
          <div className="form-group">
            <label>Usuario</label>
            <input
              placeholder="Usuario"
              name="usuario"
              className="form-control"
              value={this.state.user}
              onChange={this.changeUserHandler}
            />
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <input
              placeholder="Contraseña"
              name="contraseña"
              className="form-control"
              value={this.state.pass}
              onChange={this.changePassHandler}
            />
          </div>
          <br />
          <button
            className="btn btn-success"
            onClick={this.autenticar}
          >
            Login
          </button>
        </form>
      </div>
    )
  }
}
