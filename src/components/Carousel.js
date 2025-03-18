import Perro1 from '../img/perro1.jpg'
import Perro2 from '../img/perro2.jpg'
import Perro3 from '../img/perro3.jpg'


function Carousel () {

    return ( 
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Perro1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Perro2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Perro3} class="d-block w-100" alt="..." width={50} height={50}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    )
}
export default Carousel