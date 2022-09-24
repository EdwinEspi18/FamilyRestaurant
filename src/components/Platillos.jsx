export const Platillos = (producto) => {
  const { nombre, precio, descripcion } = producto;

  const handleClick = (valor) => {};

  return (
    <div className='platillo'>
      <div>
        <p className='nombre'>{nombre}</p>
        <p className='precio'> {precio} </p>
        <p className='descripcion'> {descripcion} </p>
      </div>
      <div className='cant'>
        <button
          className='btn btn-agregar'
          onClick={() => handleClick(producto)}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};
