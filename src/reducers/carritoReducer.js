const initialState = {
  carrito: [{ nombre: "", precio: 0, descripcion: "", cantidad: 0 }],
  cliente: { nombre: "", apellido: "", telefono: "" },
};

export const carritoReducer = (state = initialState, action) => {
  switch (action) {
    case "agregar al carrito":
      break;
    case "borrar del carrito":
    case "completar pedido":
    default:
      return state;
  }
};
