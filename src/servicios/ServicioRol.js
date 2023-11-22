import axios from "axios";
import ServicioAuth from "../servicios/ServicioAuth";

const BASE_URL_ROL_BUSCAR_TODOS = "http://localhost:8080/rol/buscar/todos";
const BASE_URL_ROL_BUSCAR_ID = "http://localhost:8080/rol/buscar/id?id=";
const BASE_URL_ROL_CREAR = "http://localhost:8080/rol/crear";
const BASE_URL_ROL_ACTUALIZAR = "http://localhost:8080/rol/actualizar";
const BASE_URL_ROL_ELIMINAR = "http://localhost:8080/rol/eliminar/id?id=";


class ServicioRoles {
  getRolTodos() {
    return axios.get(BASE_URL_ROL_BUSCAR_TODOS, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: ServicioAuth.getUser(),
        password: ServicioAuth.getPass(),
      }
    });
  }

  getRolFromId(id) {
    return axios.get(`${BASE_URL_ROL_BUSCAR_ID}${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: ServicioAuth.getUser(),
        password: ServicioAuth.getPass(),
      }
    });
  }

  crearRol(rol) {
    return axios.post(BASE_URL_ROL_CREAR, rol, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: ServicioAuth.getUser(),
        password: ServicioAuth.getPass(),
      }
    });
  }

  actualizarRol(id, responsabilidades) {
    return axios.put(BASE_URL_ROL_ACTUALIZAR, {
      "ID": id,
      "responsabilidades": responsabilidades
    }, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: ServicioAuth.getUser(),
        password: ServicioAuth.getPass(),
      }
    });
  }

  eliminarRol(id) {
    return axios.delete(`${BASE_URL_ROL_ELIMINAR}${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: ServicioAuth.getUser(),
        password: ServicioAuth.getPass(),
      }
    });
  }
}

const servicioRoles = new ServicioRoles();
export default servicioRoles;
