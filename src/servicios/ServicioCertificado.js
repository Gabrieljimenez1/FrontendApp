import axios from "axios";
import ServicioAuth from "../servicios/ServicioAuth";

const BASE_URL_CERTIFICADO_BUSCAR_TODOS =
  "http://localhost:8080/certificado/buscar/todos";
const BASE_URL_CERTIFICADO_BUSCAR_ID =
  "http://localhost:8080/certificado/buscar/id?id=";
const BASE_URL_CERTIFICADO_CREAR = "http://localhost:8080/certificado/subir";
const BASE_URL_CERTIFICADO_ELIMINAR =
  "http://localhost:8080/certificado/eliminar/id?id=";

class ServicioCertificado {
  getCertificadoTodos() {
    return axios.get(BASE_URL_CERTIFICADO_BUSCAR_TODOS, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: ServicioAuth.getUser(),
        password: ServicioAuth.getPass(),
      },
    });
  }

  getCertificadoFromId(id) {
    return axios.get(`${BASE_URL_CERTIFICADO_BUSCAR_ID}${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: ServicioAuth.getUser(),
        password: ServicioAuth.getPass(),
      },
    });
  }

  crearCertificado(
    id,
    tipo,
    descripcion,
    idEmpleado,
    fechaExpedicion,
    entidadExpedidora
  ) {
    return axios.post(
      BASE_URL_CERTIFICADO_CREAR,
      {
        id: id,
        tipo: tipo,
        descripcion: descripcion,
        idEmpleado: idEmpleado,
        fechaExpedicion: fechaExpedicion,
        entidadExpedidora: entidadExpedidora,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        auth: {
          username: ServicioAuth.getUser(),
          password: ServicioAuth.getPass(),
        },
      }
    );
  }

  eliminarCertificado(id) {
    return axios.delete(`${BASE_URL_CERTIFICADO_ELIMINAR}${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: ServicioAuth.getUser(),
        password: ServicioAuth.getPass(),
      },
    });
  }
}

const servicioCertificado = new ServicioCertificado();
export default servicioCertificado;
