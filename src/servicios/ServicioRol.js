import axios from "axios";

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
        username: "Recursos_humanos",
        password: "12345",
      }
    });
  }

  getRolFromId(id) {
    return axios.get(`${BASE_URL_ROL_BUSCAR_ID}${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: "Recursos_humanos",
        password: "12345",
      }
    });
  }

  crearRol() {
    return axios.post(BASE_URL_ROL_CREAR, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: "Recursos_humanos",
        password: "12345",
      }
    });
  }

  actualizarRol() {
    return axios.put(BASE_URL_ROL_ACTUALIZAR, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: "Recursos_humanos",
        password: "12345",
      }
    });
  }

  eliminarRol(id) {
    return axios.delete(`${BASE_URL_ROL_ELIMINAR}${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: "Recursos_humanos",
        password: "12345",
      }
    });
  }
}

const servicioRoles = new ServicioRoles();
export default servicioRoles;
