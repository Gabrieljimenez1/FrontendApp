import React, { Component } from 'react'
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom";
import servicioRol from '../../servicios/ServicioRol';

export default class InformacionRolComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: "0",
            rol: []
        }

        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.mostrarRol = this.mostrarRol.bind(this);
        this.cargarRol = this.cargarRol.bind(this);
    }

    changeIdHandler = (event) => {
        this.setState({ id: event.target.value });
    };

    cargarRol = () => {
        if (this.state.id !== "") {
            servicioRol.getRolFromId(this.state.id).then((res) => {
                this.setState({ rol: res.data });
            });
        }
    }

    mostrarRol = (e) => {
        e.preventDefault();
        this.cargarRol();        
    }

  render() {
    return (
        <div>
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Mostrar detalles Empleado</h3>
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
                                        onClick={this.mostrarRol}
                                    >
                                        Mostrar Rol
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <label>Responsabilidades del Rol:</label>
                                <div>{(this.state.rol.length !== 0) ? this.state.rol[0].responsabilidades : "ID inexistente"}</div>
                            </div>
                            <br />

                            <Link to="/roles">
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
    )
  }
}
