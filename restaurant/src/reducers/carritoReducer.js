const initialState = {
  carrito: [],
  cliente: { nombre: "", apellido: "", telefono: "" },
};

export const carritoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "agregar al carrito":
      const newProduct = state.carrito.find(
        (product) => product.id_producto === action.payload.id_producto
      );

      return newProduct
        ? {
            ...state,
            carrito: state.carrito.map((product) =>
              product.id_producto === action.payload.id_producto
                ? {
                    ...product,
                    cantidad: product.cantidad + 1,
                    price: product.price + action.payload.price,
                  }
                : product
            ),
          }
        : {
            ...state,
            carrito: [...state.carrito, action.payload],
          };
    case "borrar del carrito":
      return;
    case "completar pedido":
      return;
    default:
      return state;
  }
};
