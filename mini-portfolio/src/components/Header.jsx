import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>Міні портфоліо</h1>
      <p>Олійник Андрій — початківець Frontend-розробник</p>

      <nav>
        <NavLink to="/about">Про мене</NavLink>
        <NavLink to="/my-city">Моє місто</NavLink>
        <NavLink to="/my-future">Мій розвиток</NavLink>
      </nav>
    </header>
  );
}

export default Header;