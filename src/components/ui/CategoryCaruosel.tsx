import carousel_1 from "../../assets/carousel-1.jpg"
import carousel_2 from "../../assets/carousel-2.png";
import carousel_3 from "../../assets/carousel-3.jpg";
import carousel_4 from "../../assets/carousel-4.jpg";
import "../../CustomCarousel.css"
const CategoryCaruosel = () => {
    return (
      <>
        <div className="slides">
          <div className="slide-card">
            <img src={carousel_1} alt="" />
            <div className="slide-content">
              <h4>Slide 3</h4>
            </div>
          </div>
          <div className="slide-card">
            <img src={carousel_2} alt="" />
            <div className="slide-content">
              <h4>Slide 3</h4>
            </div>
          </div>
          <div className="slide-card">
            <img src={carousel_3} alt="" />
            <div className="slide-content">
              <h4>Slide 3</h4>
            </div>
          </div>
          <div className="slide-card">
            <img src={carousel_4} alt="" />
            <div className="slide-content">
              <h4>Slide 3</h4>
            </div>
          </div>
        </div>
        <button> </button>
        <button> </button>
      </>
    );
}

export default CategoryCaruosel
