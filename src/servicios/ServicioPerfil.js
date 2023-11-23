import axios from "axios";

const BASE_URL_PERFIL_BUSCAR_TODOS = "http://localhost:8080/perfil/buscar/todos";
const BASE_URL_PERFIL_BUSCAR_ID = "http://localhost:8080/perfil/buscar/id?id=";
const BASE_URL_PERFIL_CREAR = "http://localhost:8080/perfil/subir";
const BASE_URL_PERFIL_ACTUALIZAR = "http://localhost:8080/perfil/actualizar";
const BASE_URL_PERFIL_ELIMINAR = "http://localhost:8080/perfil/eliminar?id=";

const USER = "Recursos_humanos"
const PASS = "12345"

class ServicioPerfil {
  getPerfilTodos() {
    return axios.get(BASE_URL_PERFIL_BUSCAR_TODOS, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: USER,
        password: PASS,
      }
    });
  }

  getPerfilFromId(id) {
    return axios.get(`${BASE_URL_PERFIL_BUSCAR_ID}${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: USER,
        password: PASS,
      }
    });
  }

  crearPerfil(perfil) {
    return axios.post(BASE_URL_PERFIL_CREAR, perfil, {
      
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: USER,
        password: PASS,
      }
    });
  }

  actualizarPerfil(id, idEmpleado, habilidades, anosExperiencia) {
    return axios.put(BASE_URL_PERFIL_ACTUALIZAR, {
      "id": id,
      "idEmpleado": idEmpleado,
      "habilidades": habilidades,
      "anosExperiencia": anosExperiencia
    }, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: USER,
        password: PASS,
      }
    });
  }

  eliminarPerfil(id) {
    return axios.delete(`${BASE_URL_PERFIL_ELIMINAR}${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: USER,
        password: PASS,
      }
    });
  }
}

const servicioPerfil = new ServicioPerfil();
export default servicioPerfil;
