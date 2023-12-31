import axios from "axios";

const BASE_URL_CERTIFICADO_BUSCAR_TODOS =
  "http://localhost:8080/certificado/buscar/todos";
const BASE_URL_CERTIFICADO_BUSCAR_ID =
  "http://localhost:8080/certificado/buscar/id_certificado?id=";
const BASE_URL_CERTIFICADO_CREAR = "http://localhost:8080/certificado/subir";
const BASE_URL_CERTIFICADO_ELIMINAR =
  "http://localhost:8080/certificado/eliminar/id?id=";

const USER = "Recursos_humanos"
const PASS = "12345"

class ServicioCertificado {
  getCertificadoTodos() {
    return axios.get(BASE_URL_CERTIFICADO_BUSCAR_TODOS, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: USER,
        password: PASS,
      },
    });
  }

  getCertificadoFromId(id) {
    return axios.get(`${BASE_URL_CERTIFICADO_BUSCAR_ID}${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: USER,
        password: PASS,
      },
    });
  }

  crearCertificado(certificado) {
    return axios.post(BASE_URL_CERTIFICADO_CREAR, certificado, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: USER,
        password: PASS,
      },
    });
  }

  eliminarCertificado(id) {
    return axios.delete(`${BASE_URL_CERTIFICADO_ELIMINAR}${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: USER,
        password: PASS,
      },
    });
  }
}

const servicioCertificado = new ServicioCertificado();
export default servicioCertificado;
