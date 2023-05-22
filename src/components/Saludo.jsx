import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Saludo = ({nuevoSaludo}) => {
  return (
    <div>
      <h1 className="text-center my-5">Hello {nuevoSaludo}</h1>
    </div>
  );
};

export default Saludo;