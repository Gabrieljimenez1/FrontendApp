import React, { Component } from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom";
import servicioEmpleado from "../../servicios/ServicioEmpleado";

export default class EliminarEmpleadoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
    };
    this.changeIdHandler = this.changeIdHandler.bind(this);
    this.eliminarEmpleado = this.eliminarEmpleado.bind(this);
  }

  changeIdHandler = (event) => {
    this.setState({ id: event.target.value });
  };

  eliminarEmpleado = (e) => {
    e.preventDefault();
    console.log("empleado => " + this.state.id);
    servicioEmpleado.eliminarEmpleado(this.state.id).then((res) => {
      window.location.href = "/empleados";
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Eliminar Empleado</h3>
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
                    onClick={this.eliminarEmpleado}
                  >
                    Eliminar empleado
                  </button>

                  <Link to="/empleados">
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
