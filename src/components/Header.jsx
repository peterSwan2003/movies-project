import "./Files-Css/Header.css";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="Header">
      <div className="Logo">
        <Link className="logo" to="/">
          Movies
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink className="links" to="/">
            Watch List
          </NavLink>
        </li>
        <li>
          <NavLink className="links" to="/Watched">
            Watched
          </NavLink>
        </li>
        <li>
          <NavLink className="links" to="/Add">
            Add
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
