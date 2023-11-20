import React, { Component } from "react";
import ServicioRol from "../servicios/ServicioRol";

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
      </div>
    );
  }
}

export default ListaRoles;
