import axios from "axios";
import ServicioAuth from "../servicios/ServicioAuth";

const BASE_URL_EMPLEADO_BUSCAR_TODOS = "http://localhost:8080/empleado/buscar/todos";
const BASE_URL_EMPLEADO_BUSCAR_ID = "http://localhost:8080/empleado/buscar/id?id=";
const BASE_URL_EMPLEADO_CREAR = "http://localhost:8080/empleado/crear";
const BASE_URL_EMPLEADO_ACTUALIZAR_INFO = "http://localhost:8080/empleado/actualizar/informacion_personal";
const BASE_URL_EMPLEADO_ACTUALIZAR_ROL_FIRST = "http://localhost:8080/empleado/actualizar/rol?id=";
const BASE_URL_EMPLEADO_ACTUALIZAR_ROL_SECOND = "&idNuevoRol=";
const BASE_URL_EMPLEADO_ELIMINAR = "http://localhost:8080/empleado/eliminar/id?id=";


class ServicioEmpleado {
  getEmpleadoTodos() {
    return axios.get(BASE_URL_EMPLEADO_BUSCAR_TODOS, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: ServicioAuth.getUser(),
        password: ServicioAuth.getPass(),
      }
    });
  }

  getEmpleadoFromId(id) {
    return axios.get(`${BASE_URL_EMPLEADO_BUSCAR_ID}${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: ServicioAuth.getUser(),
        password: ServicioAuth.getPass(),
      }
    });
  }

  crearEmpleado(id, nombre, edad, correo, telefono, idRol, direccion, cedula) {
    return axios.post(BASE_URL_EMPLEADO_CREAR, {
      "id": id,
      "nombre": nombre,
      "edad": edad,
      "correo": correo,
      "telefono": telefono,
      "idRol": idRol,
      "direccion": direccion,
      "cedula": cedula
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

  actualizarEmpleadoInfo(id, nombre, edad, correo, telefono, direccion, cedula) {
    return axios.put(BASE_URL_EMPLEADO_ACTUALIZAR_INFO, {
      "id": id,
      "nombre": nombre,
      "edad": edad,
      "correo": correo,
      "telefono": telefono,
      "idRol": 0,
      "direccion": direccion,
      "cedula": cedula
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

  actualizarEmpleadoRol(id, idRol) {
    return axios.put(`${BASE_URL_EMPLEADO_ACTUALIZAR_ROL_FIRST}${id}${BASE_URL_EMPLEADO_ACTUALIZAR_ROL_SECOND}${idRol}`, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: ServicioAuth.getUser(),
        password: ServicioAuth.getPass(),
      }
    });
  }

  eliminarEmpleado(id) {
    return axios.delete(`${BASE_URL_EMPLEADO_ELIMINAR}${id}`, {
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

const servicioEmpleado = new ServicioEmpleado();
export default servicioEmpleado;
