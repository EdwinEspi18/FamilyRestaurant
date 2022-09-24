const { useState } = require("react")

const Platilos = ({ nombre, precio, descripcion }) => {
    const [Cantidad, setCantidad] = useState(1)
    const handleClick = (valor) => {
        if(valor === 'S') setCantidad(Cantidad + 1)
        if(valor === 'R') setCantidad(Cantidad - 1)
    }
    return(
        <>
        <div class="platillo">
        <p class="nombre">{ nombre }</p>
        <p class="precio"> { precio } </p>
        <p class="descripcion"> { descripcion } </p>
        <div class="cant">
            <button onClick={() => handleClick('R')}> - </button>
            <span class="cantidad"> { Cantidad } </span>
            <button onClick={() => handleClick('S')}> + </button>
            <button class="btn-agregar">Agregar</button>
        </div>
        </div>
    </>
    )
}