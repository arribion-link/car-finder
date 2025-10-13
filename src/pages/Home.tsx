import hero_image from "../assets/hero.jpg"
import brand_a from "../assets/brand-audi.png"
import brand_b from "../assets/brand-bmw.png";
import brand_c from "../assets/brand-nissan.png";
import brand_d from "../assets/brand-mazda.png";
import brand_e from "../assets/brand-lexus.png";
import OptinalFilter from "../components/ui/OptinalFilter";

import personalize_car_image from "../assets/personalized.jpg";
import test_drive from "../assets/test-drive.jpg"

const Home = () => {
    return (
      <main>
        <section className="hero-section">
          <div>
            <h1>
              Find your <br />
              Dream Car
            </h1>
            <p>
              Lorem ipsum sunt numquam sint corporis.inventore expedita. <br />{" "}
              Aliquam id ipsum mollitia, architecto qui beatae perspiciatis
              voluptate explicabo!
            </p>
            <button>Learn More</button>
          </div>
          <div>
            <img src={hero_image} alt="" />
          </div>
        </section>

        <div className="brand-section">
          <div className="brand-container">
            <div className="brand-card">
              <img src={brand_a} alt="" />
            </div>
            <div className="brand-card">
              <img src={brand_b} alt="" />
            </div>
            <div className="brand-card">
              <img src={brand_c} alt="" />
            </div>
            <div className="brand-card">
              <img src={brand_d} alt="" />
            </div>
            <div className="brand-card">
              <img src={brand_e} alt="" />
            </div>
          </div>
        </div>

        {/* CATEGORY SECTION */}
        <section className="category-section">
          <h1>Top Categories</h1>
           <OptinalFilter/>
        </section>

        <section className="services-section">
          <h1>Our Services</h1>
          <div className="services-container">
            <div>
              <h2>🚗 1. Personalized Car Match</h2>
              <h5>
                Tailored recommendations based on your lifestyle and budget.
              </h5>
              <p>
                Let us do the heavy lifting. Our intelligent matching system
                analyzes your preferences—whether it's fuel efficiency, luxury
                features, off-road capability, or family-friendly space—and
                recommends vehicles that fit your exact needs. Just answer a few
                quick questions and get matched with your ideal car in seconds.
              </p>
              <div>
                <h4>Features</h4>
                <ul>
                  <li>Smart quiz to identify your driving style</li>
                  <li>Filter by budget, brand, and body type</li>
                  <li>- Compare top matches side-by-side</li>
                </ul>
              </div>
            </div>
            <div>
              <img
                src={personalize_car_image}
                alt=""
                className="persolized-car"
              />
            </div>
            <div>
              <img src={test_drive} alt="" className="test-car" />
            </div>
            <div>
              <h2>🛠️ 2. Virtual Garage & Test Drive Booking</h2>
              <h5>Explore, save, and test drive—all in one place.</h5>
              <p>
                Build your virtual garage by saving cars you love. Schedule test
                drives at nearby dealerships with just a click. Whether you're
                browsing casually or ready to buy, our platform keeps your
                favorites organized and helps you take the next step with
                confidence. Features: - Save and track favorite listings -
                Real-time test drive availability - Notifications for price
                drops and new arrivals Would you like help designing the layout
                or writing copy for these sections?
              </p>
              <div>
                <h4>Features</h4>
                <ul>
                  <li>Save and track favorite listings</li>
                  <li>Real-time test drive availability</li>
                  <li>Notifications for price drops and new arrivals</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
}

export default Home
