import React, { Component } from "react";
import ServicioPerfil from "../../servicios/ServicioPerfil";
import HeaderComponent from "../HeaderComponent";
// eslint-disable-next-line
import {BrowserRouter as Router, Link } from "react-router-dom";

class ListaPerfiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      perfiles: [],
    };
  }

  componentDidMount() {
    ServicioPerfil.getPerfilTodos().then((res) => {
      this.setState({ perfiles: res.data });
    });
  }

  render() {
    return (
      <div>
        <HeaderComponent />
        <h2 className="text-center">Lista Perfiles</h2>
        <div className="row">
          <table className="table table-striped table-bordered">
            <tbody>
              <tr>
                <th>Perfil ID</th>
                <th>Empleado ID</th>
                <th>Habilidades</th>
                <th>Años de Experiencia</th>
              </tr>
            </tbody>

            <tbody>
              {this.state.perfiles.map((perfil) => (
                <tr key={perfil.id}>
                  <td>{perfil.id}</td>
                  <td>{perfil.idEmpleado}</td>
                  <td>{perfil.habilidades}</td>
                  <td>{perfil.anosExperiencia}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <ul>
            <Link to="/ver-perfiles">
              <button className="btn btn-primary"> Buscar por ID</button>
            </Link>
          </ul>
          <ul>
            <Link to="/crear-perfiles">
              <button className="btn btn-primary"> Agregar Perfil</button>
            </Link>
          </ul>
          <ul>
            <Link to="/actualizar-perfiles">
              <button className="btn btn-primary">
                Actualizar Perfil
              </button>
            </Link>
          </ul>
          <ul>
            <Link to="/eliminar-perfiles">
              <button className="btn btn-primary"> Eliminar Perfiles</button>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default ListaPerfiles;
