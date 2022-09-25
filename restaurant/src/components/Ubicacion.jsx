export const Ubicacion = () => {
  return (
    <>
      <section className='ubicacion' id='ubicacion'>
        <div className='contenedor'>
          <h3 className='titulo'>Ubicación</h3>

          <div className='direccion'>
            <p className='calle'>
              802 N 7th St, Allentown, <br />
              PA 18102, Estados Unidos
            </p>
            <p className='telefono'>(484)-350-3429</p>
          </div>

          <div className='horarios'>
            <h4>Horarios</h4>
            <p className='entre-semana'>
              <span>Lunes a Sábado</span> <br />
              9:00am-9:00pm
            </p>
            <p className='fin-semana'>
              {" "}
              <span>Domingo</span> <br /> Cerrado
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
