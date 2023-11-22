import React, { Component } from 'react'
import servicioEmpleado from '../../servicios/ServicioEmpleado';
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class InformaciónEmpleadoComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: "",
            empleado: []
        }

        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.mostrarEmpleado = this.mostrarEmpleado.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    changeIdHandler = (event) => {
        this.setState({ id: event.target.value });
      };

    componentDidMount() {
    servicioEmpleado.getEmpleadoFromId(this.state.id).then((res) => {
        this.setState({ empleados: res.data });
      });
    }
    

    mostrarEmpleado = (e) => {
        e.preventDefault();
        console.log(this.state.id);
        this.componentDidMount();
        console.log(this.state.empleado);
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
                                <button
                                    className="btn btn-success"
                                    onClick={this.mostrarEmpleado}
                                >
                                    Mostrar empleado
                                </button>
                            </div>
                        </form> 
                    </div>
                    <div className='card-body'>
                        <div className='row'>
                            <label>Nombre del empleado:</label>
                            <div>{this.state.empleado.nombre}</div>
                        </div>
                        <div className='row'>
                            <label>Edad del empleado:</label>
                            <div>{this.state.empleado.edad}</div>
                        </div>
                        <div className='row'>
                            <label>Correo del empleado:</label>
                            <div>{this.state.empleado.correo}</div>
                        </div>
                        <div className='row'>
                            <label>Telefono del empleado:</label>
                            <div>{this.state.empleado.telefono}</div>
                        </div>
                        <div className='row'>
                            <label>Direccion del empleado:</label>
                            <div>{this.state.empleado.direccion}</div>
                        </div>
                        <div className='row'>
                            <label>Cedula del empleado:</label>
                            <div>{this.state.empleado.cedula}</div>
                        </div>
                        <div className='row'>
                            <label>ID_Rol del empleado:</label>
                            <div>{this.state.empleado.idRol}</div>
                        </div>
                        
                        <Link to="/empleados">
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
