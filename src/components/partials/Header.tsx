import car_logo from "../../assets/car-logo.png"

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={car_logo} alt="" className="logo" />
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header
