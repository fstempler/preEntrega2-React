import  img1  from '../../assets/img1.jpg';
import  img2  from '../../assets/img2.jpg';
import  img3  from '../../assets/img3.jpg';
import './carousel.css';

export const Carousel = () => {
    return( 
      <div id="carouselExampleAutoplaying" className="carousel slide carouselPosition" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active carouselContainer">
    <img src={img2} className="d-block img1" alt="..." />
    </div>
    <div className="carousel-item carouselContainer">
    <img src={img3} className="d-block img1" alt="..." />
    </div>
    <div className="carousel-item carouselContainer">
    <img src={img1} className="d-block img1" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> 
    

    )
}

export default Carousel

