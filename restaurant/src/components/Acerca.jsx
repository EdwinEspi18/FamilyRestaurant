import acerca from "../img/acerca-de.jpg";

export const Acerca = () => {
  return (
    <section className='acerca-de' id='acerca-de'>
      <div className='contenedor'>
        <div className='foto'>
          <img src={acerca} alt='' />
        </div>
        <article>
          <h3>Acerca de</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            aut voluptas laboriosam quia officiis deleniti accusantium expedita,
            placeat necessitatibus voluptatum distinctio odio, suscipit eaque,
            fuga ab culpa neque unde tempore.
          </p>
        </article>
      </div>
    </section>
  );
};
