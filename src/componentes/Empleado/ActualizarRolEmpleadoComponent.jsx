import React, { Component } from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom";
import servicioEmpleado from "../../servicios/ServicioEmpleado";

class ActualizarRolEmpleadoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      idRol: "",
    };
    this.changeIdHandler = this.changeIdHandler.bind(this);
    this.changeIdRolHandler = this.changeIdRolHandler.bind(this);
    this.actualizarRolEmpleado = this.actualizarRolEmpleado.bind(this);
  }

  actualizarRolEmpleado = (e) => {
    e.preventDefault();
    let empleado = {
      id: this.state.id,
      idRol: this.state.idRol,
    };
    console.log("empleado => " + JSON.stringify(empleado));
    servicioEmpleado
      .actualizarEmpleadoRol(this.state.id, this.state.idRol)
      .then((res) => {
        Link("/empleados");
      });
  };

  changeIdHandler = (event) => {
    this.setState({ id: event.target.value });
  };

  changeIdRolHandler = (event) => {
    this.setState({ idRol: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Actualizar Rol Empleado</h3>
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
                    <label>iDRol:</label>
                    <input
                      placeholder="idRol"
                      name="idrol"
                      className="form-control"
                      value={this.state.idRol}
                      onChange={this.changeIdRolHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.actualizarRolEmpleado}
                  >
                    Guardar empleado
                  </button>

                  <Link to="/empleados">
                    <button
                      className="btn btn-danger"
                      style={{ marginLeft: "10px" }}
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

export default ActualizarRolEmpleadoComponent;
