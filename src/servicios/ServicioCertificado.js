import axios from "axios";

const BASE_URL_CERTIFICADO_BUSCAR_TODOS = "http://localhost:8080/certificado/buscar/todos";
const BASE_URL_CERTIFICADO_BUSCAR_ID = "http://localhost:8080/certificado/buscar/id?id=";
const BASE_URL_CERTIFICADO_CREAR = "http://localhost:8080/certificado/subir";
const BASE_URL_CERTIFICADO_ELIMINAR = "http://localhost:8080/certificado/eliminar/id?id=";


class ServicioCertificado {
  getCertificadoTodos() {
    return axios.get(BASE_URL_CERTIFICADO_BUSCAR_TODOS, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: "Recursos_humanos",
        password: "12345",
      }
    });
  }

  getCertificadoFromId(id) {
    return axios.get(`${BASE_URL_CERTIFICADO_BUSCAR_ID}${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: "Recursos_humanos",
        password: "12345",
      }
    });
  }

  crearCertificado() {
    return axios.post(BASE_URL_CERTIFICADO_CREAR, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: "Recursos_humanos",
        password: "12345",
      }
    });
  }

  eliminarCertificado(id) {
    return axios.delete(`${BASE_URL_CERTIFICADO_ELIMINAR}${id}`, {
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

const servicioCertificado = new ServicioCertificado();
export default servicioCertificado;
