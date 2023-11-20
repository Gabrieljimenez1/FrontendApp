import React, { Component } from 'react'

export default class CrearEmpleadoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nombre: '',
            edad: '',
            correo: '',
            telefono: '',
            direccion: '',
            cedula: '',
            idRol: ''
        }
    }

    changeNombreHandler = (event) => {
        this.setState({ nombre: event.target.value });
    }

    changeEdadHandler = (event) => {  
        this.setState({ edad: event.target.value });    
    }


    render() {
        return (
            <div>
                    <div className="container"> 
                        <div className="row">
                            <div className="card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Agregar Empleado</h3>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Nombre:</label>
                                            <input placeholder="Nombre" name="nombre" className="form-control"
                                                value={this.state.nombre} onChange={this.changeNombreHandler}/>
                                        </div>
                                        <div className="form-group">
                                            <label>Nombre:</label>
                                            <input placeholder="Edad" name="edad" className="form-control"
                                                value={this.state.edad} onChange={this.changeEdadHandler}/>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

