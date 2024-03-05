const MyCarousel = () => {
    return ( 
        <div>
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://res.cloudinary.com/dovavtssm/image/upload/v1705742838/lealassist_iizplu.jpg" class="d-block w-100 cor" alt="...">
              </img>
              </div>
              <div class="carousel-item">
                <img src="https://res.cloudinary.com/dovavtssm/image/upload/v1705743009/legal-advice-legal-information-600x350_m1hr7y.jpg" class="d-block w-100 cor" alt="...">
                </img>
              </div>
              <div class="carousel-item">
                <img src="https://res.cloudinary.com/dtnvkccyy/image/upload/v1697015994/samples/law3_qrrxoq.jpg" class="d-block w-100 cor" alt="...">
              </img>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>


          
        </div>
     );
}
 
export default MyCarousel;