import React, { Component } from "react";
import ServicioPerfil from "../servicios/ServicioPerfil";

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
      </div>
    );
  }
}

export default ListaPerfiles;
