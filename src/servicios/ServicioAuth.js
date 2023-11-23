import axios from "axios";

const BASE_URL_EMPLEADO_BUSCAR_TODOS = "http://localhost:8080/empleado/buscar/todos";

class ServicioAuth {
  async testAuth(new_user, new_pass) {
    return axios.get(BASE_URL_EMPLEADO_BUSCAR_TODOS, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: new_user,
        password: new_pass,
      }
    })
    .then(res => {console.log(true);return true})
    .catch(err => {console.log(false);return false})
  }
}

const servicioAuth = new ServicioAuth();
export default servicioAuth;