import {
  Acerca,
  Footer,
  Header,
  Imagenes,
  Mapa,
  Platillos,
  Ubicacion,
} from "./components";
import {
  lista_arroces,
  lista_carnes,
  lista_ensaladas,
  lista_jugos,
  lista_mariscos,
  lista_ordenes,
  lista_pollo,
  lista_postres,
  lista_sandwich,
  lista_sopa,
} from "./helpers";

function App() {
  return (
    <>
      <Header />
      <section className='main'>
        <Acerca />
        <section className='menu'>
          <div className='contenedor'>
            <h3 className='titulo' id='platillos'>
              Nuestro Menú
            </h3>
            <div className='contenedor-menu'>
              <article className='menu-desayuno'>
                <p className='categoria'>
                  Desayuno •<span>Breakfast</span>
                </p>
                <p className='descripcion-categoria'>
                  Servido con Mangu o Papas Fritas o Pure de Papa o Tostadas o
                  Guineitos o Yuca •
                  <span>
                    W/Mashed Plantains or Mashed Potato or French Fries or Toast
                    or Green Bananas or Cassava
                  </span>
                </p>
              </article>

              <article className='menu-carnes'>
                <p className='categoria'>
                  Carnes • <span>Meats</span>
                </p>
                <p className='descripcion-categoria'>
                  Servidos con Arroz y Habichuelas o Tostones o Maduros o
                  Ensalada o Arroz con Guandules o Papitas Fritas o Yuca o Moro
                  de habichuelas Negra •
                  <span>
                    Served W/ Rice and beans or Green or Yellow Plantains or
                    Salad or Rice with Pigeon Peas or French Fries or Cassava.
                  </span>
                  {lista_carnes.map((carne) => (
                    <Platillos {...carne} />
                  ))}
                </p>
              </article>

              <article className='menu-sopas'>
                <p className='categoria'>
                  Sopas • <span>Soups</span>
                </p>
                {lista_sopa.map((sopa) => (
                  <Platillos {...sopa} />
                ))}
              </article>

              <article className='menu-sandwich'>
                <p className='categoria'>Sandwich</p>
                {lista_sandwich.map((sand) => (
                  <Platillos {...sand} />
                ))}
              </article>

              <article className='menu-pollo'>
                <p className='categoria'>
                  Pollo • <span>Chicken</span>
                </p>
                {lista_pollo.map((pollo) => (
                  <Platillos {...pollo} />
                ))}
              </article>

              <article className='menu-mariscos'>
                <p className='categoria'>
                  Mariscos • <span>Seafood</span>
                </p>
                {lista_mariscos.map((marisco) => (
                  <Platillos {...marisco} />
                ))}
              </article>

              <article className='menu-ensaladas'>
                <p className='categoria'>
                  Ensaladas • <span>Salads</span>
                </p>
                {lista_ensaladas.map((salado) => (
                  <Platillos {...salado} />
                ))}
              </article>

              <article className='menu-ordenes'>
                <p className='categoria'>
                  Ordenes Extras • <span>Side Orders</span>
                </p>
                {lista_ordenes.map((orden) => (
                  <Platillos {...orden} />
                ))}
              </article>

              <article className='menu-arroces'>
                <p className='categoria'>
                  Arroces • <span>Rice</span>
                </p>
                {lista_arroces.map((arroz) => (
                  <Platillos {...arroz} />
                ))}
              </article>

              <article className='menu-postres'>
                <p className='categoria'>
                  Postres • <span>Desserts</span>
                </p>
                {lista_postres.map((postre) => (
                  <Platillos {...postre} />
                ))}
              </article>

              <article className='menu-jugos'>
                <p className='categoria'>
                  Jugos Naturales & Batidos •
                  <span>Natural Juices & Shakes</span>
                </p>
                {lista_jugos.map((jugo) => (
                  <Platillos {...jugo} />
                ))}
              </article>
            </div>
          </div>
        </section>
        <Imagenes />
        <Ubicacion />
        <Mapa />
      </section>
      <Footer />
    </>
  );
}

export default App;
