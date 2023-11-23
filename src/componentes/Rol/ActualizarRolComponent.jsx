import React, { Component } from 'react'
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom";
import servicioRol from '../../servicios/ServicioRol';

export default class ActualizarRolComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',
            responsabilidades: ''
        }
        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeResponsabilidadesHandler = this.changeResponsabilidadesHandler.bind(this);
        this.actualizarRol = this.actualizarRol.bind(this);
    }


    actualizarRol = (e) => {
        e.preventDefault();
        let rol = {
            id: this.state.id,
            responsabilidades: this.state.responsabilidades
        };
        console.log("rol => " + JSON.stringify(rol));
        servicioRol.actualizarRolInfo(
            this.state.id,
            this.state.responsabilidades
        ).then((res) => {
            window.location.href = "/roles";
        });
    }

    changeIdHandler = (event) => {
        this.setState({ id: event.target.value });
    }

    changeResponsabilidadesHandler = (event) => {  
        this.setState({ responsabilidades: event.target.value });
    }



  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Actualizar Rol</h3>
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
                    <label>Responsabilidades:</label>
                    <input
                      placeholder="Responsabilidades"
                      name="responsabilidades"
                      className="form-control"
                      value={this.state.responsabilidades}
                      onChange={this.changeResponsabilidadesHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.actualizarRol}
                  >
                    Guardar Cambios del rol
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
