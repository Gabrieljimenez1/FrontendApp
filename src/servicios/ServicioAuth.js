import axios from "axios";

const BASE_URL_EMPLEADO_BUSCAR_TODOS = "http://localhost:8080/empleado/buscar/todos";

class ServicioAuth {
  user = "Recursos_humanos";
  pass = "12345";

  testAuth(new_user, new_pass) {
    this.user = new_user;
    this.pass = new_pass;

    try {
      axios.get(BASE_URL_EMPLEADO_BUSCAR_TODOS, {
        headers: {
          "Content-Type": "application/json",
        },
        auth: {
          username: this.user,
          password: this.pass,
        }
      });
      
      return 1;
    } catch {
      return 0;
    }
  }

  getUser(){
    return this.user;
  }

  getPass(){
    return this.pass;
  }
}

const servicioAuth = new ServicioAuth();
export default servicioAuth;