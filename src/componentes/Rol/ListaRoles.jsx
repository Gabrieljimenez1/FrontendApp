import React, { Component } from "react";
import ServicioRol from "../../servicios/ServicioRol";
import HeaderComponent from "../HeaderComponent";
// eslint-disable-next-line
import {BrowserRouter as Router, Link} from "react-router-dom";

class ListaRoles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: [],
    };
  }

  componentDidMount() {
    ServicioRol.getRolTodos().then((res) => {
      this.setState({ roles: res.data });
    });
  }

  render() {
    return (
      <div>
        <HeaderComponent />
        <h2 className="text-center">Lista Roles</h2>
        <div className="row">
          <table className="table table-striped table-bordered">
            <tbody>
              <tr>
                <th>Rol ID</th>
                <th>Responsabilidades</th>
              </tr>
            </tbody>

            <tbody>
              {this.state.roles.map((rol) => (
                <tr key={rol.id}>
                  <td>{rol.id}</td>
                  <td>{rol.responsabilidades}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <ul>
            <Link to="/ver-rol">
              <button className="btn btn-primary"> Buscar por ID</button>
            </Link>
          </ul>
          <ul>
            <Link to="/agregar-rol">
              <button className="btn btn-primary"> Agregar Rol</button>
            </Link>
          </ul>
          <ul>
            <Link to="/actualizar-rol">
              <button className="btn btn-primary">
                Actualizar Informacion del Rol
              </button>
            </Link>
          </ul>
          <ul>
            <Link to="/eliminar-rol">
              <button className="btn btn-primary"> Eliminar Rol</button>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default ListaRoles;
