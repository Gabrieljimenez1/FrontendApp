import React from "react";
import HeaderComponent from "./HeaderComponent";

const PaginaInicial = () => {
  return (
    <div>
      <HeaderComponent />
      <h1>Bienvenido a RH Manager</h1>
      <p>
        Maneje los empleados, sus roles y sus certificados o perfiles asociados
        de su empresa.
      </p>
      <small>All Rights Reserved 2023 @RHManager</small>
    </div>
  );
};

export default PaginaInicial;
