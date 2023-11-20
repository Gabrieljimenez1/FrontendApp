import axios from "axios";

const BASE_URL_PERFIL_BUSCAR_TODOS = "http://localhost:8080/perfil/buscar/todos";
const BASE_URL_PERFIL_BUSCAR_ID = "http://localhost:8080/perfil/buscar/id?id=";
const BASE_URL_PERFIL_CREAR = "http://localhost:8080/perfil/subir";
const BASE_URL_PERFIL_ACTUALIZAR = "http://localhost:8080/perfil/actualizar";
const BASE_URL_PERFIL_ELIMINAR = "http://localhost:8080/perfil/eliminar/id?id=";


class ServicioPerfil {
  getPerfilTodos() {
    return axios.get(BASE_URL_PERFIL_BUSCAR_TODOS, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: "Recursos_humanos",
        password: "12345",
      }
    });
  }

  getPerfilFromId(id) {
    return axios.get(`${BASE_URL_PERFIL_BUSCAR_ID}${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: "Recursos_humanos",
        password: "12345",
      }
    });
  }

  crearPerfil() {
    return axios.post(BASE_URL_PERFIL_CREAR, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: "Recursos_humanos",
        password: "12345",
      }
    });
  }

  actualizarPerfil() {
    return axios.put(BASE_URL_PERFIL_ACTUALIZAR, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: "Recursos_humanos",
        password: "12345",
      }
    });
  }

  eliminarPerfil(id) {
    return axios.delete(`${BASE_URL_PERFIL_ELIMINAR}${id}`, {
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

const servicioPerfil = new ServicioPerfil();
export default servicioPerfil;
