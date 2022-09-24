import { useState } from "react";

export const Platilos = ({ nombre, precio, descripcion }) => {
  const [Cantidad, setCantidad] = useState(1);
  const handleClick = (valor) => {
    if (valor === "S") setCantidad(Cantidad + 1);
    if (valor === "R") setCantidad(Cantidad - 1);
  };
  return (
    <>
      <div className='platillo'>
        <p className='nombre'>{nombre}</p>
        <p className='precio'> {precio} </p>
        <p className='descripcion'> {descripcion} </p>
        <div className='cant'>
          <button onClick={() => handleClick("R")}> - </button>
          <span className='cantidad'> {Cantidad} </span>
          <button onClick={() => handleClick("S")}> + </button>
          <button className='btn-agregar'>Agregar</button>
        </div>
      </div>
    </>
  );
};
