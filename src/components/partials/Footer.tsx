
import car_logo from "../../assets/car-logo.png"

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={car_logo} alt="" className="car-logo" />
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
          </div>
          <div>
              <p>Dev - (+254) 88 44 56 35</p>
              <p>arribion@gmail.com</p>
              <p>CR7, Kutus Kirungoga, Kenya</p>
          </div>
    </footer>
  );
}

export default Footer
