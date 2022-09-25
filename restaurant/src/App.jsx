import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Acerca,
  Footer,
  Header,
  Imagenes,
  Mapa,
  Platillos,
  Ubicacion,
} from "./components";
import { ButtonCart } from "./components/ButtonCart";
import { getPlatillos } from "./helpers/getplatillos";

function App() {
  const [products, setProducts] = useState([]);
  const { carrito } = useSelector((state) => state.carrito);
  useEffect(() => {
    fetch("http://localhost:3000/categoriesproducts")
      .then((res) => res.json())
      .then(setProducts)
      .catch((err) => console.log(err));
  }, []);
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

                {getPlatillos(products, 2)?.products.map((product) => (
                  <Platillos key={product.name} producto={product} />
                ))}
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

                {getPlatillos(products, 8)?.products.map((product) => (
                  <Platillos key={product.name} producto={product} />
                ))}
              </article>

              <article className='menu-sopas'>
                <p className='categoria'>
                  Sopas • <span>Soups</span>
                </p>

                {getPlatillos(products, 5)?.products.map((product) => (
                  <Platillos key={product.name} producto={product} />
                ))}
              </article>

              <article className='menu-sandwich'>
                <p className='categoria'>Sandwich</p>

                {getPlatillos(products, 5)?.products.map((product) => (
                  <Platillos key={product.name} producto={product} />
                ))}
              </article>

              <article className='menu-pollo'>
                <p className='categoria'>
                  Pollo • <span>Chicken</span>
                </p>
                {getPlatillos(products, 9)?.products.map((product) => (
                  <Platillos key={product.name} producto={product} />
                ))}
              </article>

              <article className='menu-mariscos'>
                <p className='categoria'>
                  Mariscos • <span>Seafood</span>
                </p>

                {getPlatillos(products, 10)?.products.map((product) => (
                  <Platillos key={product.name} producto={product} />
                ))}
              </article>

              <article className='menu-ensaladas'>
                <p className='categoria'>
                  Ensaladas • <span>Salads</span>
                </p>

                {getPlatillos(products, 6)?.products.map((product) => (
                  <Platillos key={product.name} producto={product} />
                ))}
              </article>

              <article className='menu-ordenes'>
                <p className='categoria'>
                  Ordenes Extras • <span>Side Orders</span>
                </p>

                {getPlatillos(products, 11)?.products.map((product) => (
                  <Platillos key={product.name} producto={product} />
                ))}
              </article>

              <article className='menu-arroces'>
                <p className='categoria'>
                  Arroces • <span>Rice</span>
                </p>

                {getPlatillos(products, 12)?.products.map((product) => (
                  <Platillos key={product.name} producto={product} />
                ))}
              </article>

              <article className='menu-postres'>
                <p className='categoria'>
                  Postres • <span>Desserts</span>
                </p>

                {getPlatillos(products, 13)?.products.map((product) => (
                  <Platillos key={product.name} producto={product} />
                ))}
              </article>

              <article className='menu-jugos'>
                <p className='categoria'>
                  Jugos Naturales & Batidos •
                  <span>Natural Juices & Shakes</span>
                </p>

                {getPlatillos(products, 15)?.products.map((product) => (
                  <Platillos key={product.name} producto={product} />
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
      {carrito.length !== 0 && <ButtonCart />}
    </>
  );
}

export default App;
