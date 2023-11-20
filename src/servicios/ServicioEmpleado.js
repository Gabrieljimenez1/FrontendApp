import axios from "axios";

const BASE_URL_EMPLEADO_BUSCAR_TODOS = "http://localhost:8080/empleado/buscar/todos";
const BASE_URL_EMPLEADO_BUSCAR_ID = "http://localhost:8080/empleado/buscar/id?id=";
const BASE_URL_EMPLEADO_CREAR = "http://localhost:8080/empleado/crear";
const BASE_URL_EMPLEADO_ACTUALIZAR_INFO = "http://localhost:8080/empleado/actualizar/informacion_personal";
const BASE_URL_EMPLEADO_ACTUALIZAR_ROL = "http://localhost:8080/empleado/actualizar/rol";
const BASE_URL_EMPLEADO_ELIMINAR = "http://localhost:8080/empleado/eliminar/id?id=";


class ServicioEmpleado {
  getEmpleadoTodos() {
    return axios.get(BASE_URL_EMPLEADO_BUSCAR_TODOS, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: "Recursos_humanos",
        password: "12345",
      }
    });
  }

  getEmpleadoFromId(id) {
    return axios.get(`${BASE_URL_EMPLEADO_BUSCAR_ID}${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: "Recursos_humanos",
        password: "12345",
      }
    });
  }

  crearEmpleado() {
    return axios.post(BASE_URL_EMPLEADO_CREAR, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: "Recursos_humanos",
        password: "12345",
      }
    });
  }

  actualizarEmpleadoInfo() {
    return axios.put(BASE_URL_EMPLEADO_ACTUALIZAR_INFO, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: "Recursos_humanos",
        password: "12345",
      }
    });
  }

  actualizarEmpleadoRol() {
    return axios.put(BASE_URL_EMPLEADO_ACTUALIZAR_ROL, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: "Recursos_humanos",
        password: "12345",
      }
    });
  }

  eliminarEmpleado(id) {
    return axios.delete(`${BASE_URL_EMPLEADO_ELIMINAR}${id}`, {
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

const servicioEmpleado = new ServicioEmpleado();
export default servicioEmpleado;
