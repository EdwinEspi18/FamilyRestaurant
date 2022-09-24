import uno from "../img/1.jpg";
import dos from "../img/2.jpg";
import tres from "../img/3.jpg";
import cuatro from "../img/4.jpg";
import cinco from "../img/5.jpg";
import seis from "../img/6.jpg";
import siete from "../img/7.jpg";
import ocho from "../img/8.jpg";

export const Imagenes = () => {
  return (
    <>
      <section className='galeria' id='galeria'>
        <div className='foto'>
          <img src={uno} alt='' />
        </div>
        <div className='foto'>
          <img src={dos} alt='' />
        </div>
        <div className='foto'>
          <img src={tres} alt='' />
        </div>
        <div className=' foto'>
          <img src={cuatro} alt='' />
        </div>
        <div className='foto'>
          <img src={cinco} alt='' />
        </div>
        <div className='foto'>
          <img src={seis} alt='' />
        </div>
        <div className='foto'>
          <img src={siete} alt='' />
        </div>
        <div className=' foto'>
          <img src={ocho} alt='' />
        </div>
      </section>
    </>
  );
};
