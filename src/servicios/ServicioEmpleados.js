import axios from "axios";

const BASE_URL_API_EMPLEADO_TODOS =
  "http://localhost:8080/perfil/buscar/todos";

class ServicioEmpleados {
  getEmpleados() {
    return axios.get(BASE_URL_API_EMPLEADO_TODOS, {
      headers: {
        "Content-Type": "application/json",
      }
    });
  }
}

export default new ServicioEmpleados();
