const Header = () => {
    return(
        <>
            <header>
                <div class="contenedor">
                    <nav class="menu animate__animated animate__fadeInDown">
                        <a href="#acerca-de" id="btn-acerca-de">Acerca de</a>
                        <a href="#platillos" id="btn-menu">Menú</a>
                        <a href="#galeria" id="btn-galeria">Galeria</a>
                        <a href="#ubicacion" id="btn-ubicacion">Ubicación</a>
                    </nav>

                    <div class="textos">
                        <h1 class="nombre  animate__animated animate__fadeInUp">7th Street <br/> <span
                            class="  animate__animated animate__fadeInUp">Family Restaurant</span>
                        </h1>
                        <h3 class="animate__animated animate__fadeInUp">Spanish, Juice Bars & Smoothies, Breakfast & Brunch</h3>
                    </div>
                </div>
            </header>

        </>
    )
}