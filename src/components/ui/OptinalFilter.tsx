// import { useState } from "react";
import Instock from "./Instock";
import Carousel from "./CategoryCaruosel";

const OptinalFilter = () => {
    return (
      <>
        <div className="car-filter-options">
          <div>
            <ul>
              <li>
                In Stock <hr />{" "}
              </li>
              <li>
                Used Cars <hr />{" "}
              </li>
              <li>
                New Cars <hr />{" "}
              </li>
              <li>
                Latest Model <hr />{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="car-categories-container">
          {/* CarouselComponent.js */}
          <div className="carousel-wrapper">
            <Carousel />
          </div>
          <Instock />
        </div>
      </>
    );
}

export default OptinalFilter
