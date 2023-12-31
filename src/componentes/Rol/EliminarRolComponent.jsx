import React, { Component } from 'react'
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom";
import servicioRol from '../../servicios/ServicioRol';

export default class EliminarRolComponent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
        id: "",
        };
        this.changeIdHandler = this.changeIdHandler.bind(this);
        
    }

    changeIdHandler = (event) => {
        this.setState({ id: event.target.value });
    }

    eliminarRol = (e) => {
        e.preventDefault();
        console.log("rol => " + this.state.id);
        servicioRol.eliminarRol(this.state.id).then((res) => {
        window.location.href = "/roles";
        });
    }

  render() {
    return (
        <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Eliminar Rol </h3>
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
                    onClick={this.eliminarRol}
                  >
                    Eliminar Rol
                  </button>

                  <Link to="/roles">
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
    )
  }
}
