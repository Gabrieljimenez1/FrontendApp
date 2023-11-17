import axios from "axios";

const BASE_URL_API_EMPLEADO_TODOS =
  "http://localhost:8080/empleado/buscar/todos";

class ServicioEmpleados {
  getEmpleados() {
    return axios.get(
      BASE_URL_API_EMPLEADO_TODOS,
      {},
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          mode: "no-cors",
        },
        auth: {
          username: "Recursos_humanos",
          password: "12345",
        },
      }
    );
  }
}

export default new ServicioEmpleados();
