import { useDispatch } from "react-redux";

export const Platillos = ({
  producto: { name, price, id_producto, stock },
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: "agregar al carrito",
      payload: { id_producto, name, price, cantidad: 1 },
    });
  };

  return (
    <div className='platillo'>
      <div>
        <p className='nombre'>{name}</p>
        <p className='precio'>${price}.00</p>
        <p className='descripcion'>Stock: {stock}</p>
      </div>
      <div className='cant'>
        <button className='btn btn-agregar' onClick={handleClick}>
          Agregar
        </button>
      </div>
    </div>
  );
};
