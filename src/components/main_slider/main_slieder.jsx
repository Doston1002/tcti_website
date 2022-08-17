import slide_5 from '../../images/slide1.jpg'
import slide_2 from '../../images/slide2.jpg'
import slide_3 from '../../images/slide3.jpg'
import slide_4 from '../../images/slide4.jpg'
import slide_1 from '../../images/Qabul22.jpg'
import slide_6 from '../../images/Toshkent_kimyo_texnologiya_instituti.jpg'

function MainSlider() {
    return (
      <>
        <div className="header_img">
          <div className="container-fluid">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item">
                  <img
                    className=""
                    src={`${slide_5}`}
                    width="100%"
                    height="100%"
                    alt=""
                  />
                </div>
                <div className="carousel-item active">
                  <img
                    className=""
                    src={`${slide_1}`}
                    width="100%"
                    height="100%"
                    alt=""
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className=""
                    src={`${slide_2}`}
                    width="100%"
                    height="100%"
                    alt=""
                  />
                </div>{" "}
                <div className="carousel-item">
                  <a href="http://www.double-degree.tcti.uz" target="_blank">
                    {" "}
                    <img
                      className=""
                      src={`${slide_6}`}
                      width="100%"
                      height="100%"
                      alt=""
                    />
                  </a>
                </div>
                <div className="carousel-item">
                  <img
                    className=""
                    src={`${slide_3}`}
                    width="100%"
                    height="100%"
                    alt=""
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className=""
                    src={`${slide_4}`}
                    width="100%"
                    height="100%"
                    alt=""
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev slider__btn"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
              </button>
              <button
                className="carousel-control-next slider__btn"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
              </button>
            </div>
          </div>
        </div>
      </>
    );
}

export default MainSlider;
