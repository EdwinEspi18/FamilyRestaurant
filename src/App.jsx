import { useEffect, useState } from "react";
import { createLogger } from "vite";
import {
  Acerca,
  Footer,
  Header,
  Imagenes,
  Mapa,
  Platillos,
  Ubicacion,
} from "./components";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/categoriesproducts")
      .then((res) => res.json())
      .then(setProducts)
      .catch((err) => console.log(err));
  }, []);
  console.log(products);
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
                  Desayuno • <span>Breakfast</span>
                </p>
                <p className='descripcion-categoria'>
                  Servido con Mangu o Papas Fritas o Pure de Papa o Tostadas o
                  Guineitos o Yuca •
                  <span>
                    W/Mashed Plantains or Mashed Potato or French Fries or Toast
                    or Green Bananas or Cassava
                  </span>
                </p>
                {products ?? products.map((product) => console.log(product))}
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
                </p>
              </article>

              <article className='menu-sopas'>
                <p className='categoria'>
                  Sopas • <span>Soups</span>
                </p>
              </article>

              <article className='menu-sandwich'>
                <p className='categoria'>Sandwich</p>
              </article>

              <article className='menu-pollo'>
                <p className='categoria'>
                  Pollo • <span>Chicken</span>
                </p>
              </article>

              <article className='menu-mariscos'>
                <p className='categoria'>
                  Mariscos • <span>Seafood</span>
                </p>
              </article>

              <article className='menu-ensaladas'>
                <p className='categoria'>
                  Ensaladas • <span>Salads</span>
                </p>
              </article>

              <article className='menu-ordenes'>
                <p className='categoria'>
                  Ordenes Extras • <span>Side Orders</span>
                </p>
              </article>

              <article className='menu-arroces'>
                <p className='categoria'>
                  Arroces • <span>Rice</span>
                </p>
              </article>

              <article className='menu-postres'>
                <p className='categoria'>
                  Postres • <span>Desserts</span>
                </p>
              </article>

              <article className='menu-jugos'>
                <p className='categoria'>
                  Jugos Naturales & Batidos •
                  <span>Natural Juices & Shakes</span>
                </p>
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
