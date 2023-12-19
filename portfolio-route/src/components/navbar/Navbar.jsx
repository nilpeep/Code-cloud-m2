import "./Navbar"
import {NavLink} from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="nav-link">
    <ul className="nav-link__list">
      <li className="nav-link__item">
        <NavLink to="/" className="nav-link__link nav-link__link--active" state={{name:"vildan"}}>
          Home
        </NavLink>
      </li>
      <li className="nav-link__item">
        <NavLink to="/about" className="nav-link__link">
          About Me
        </NavLink>
      </li>
      <li className="nav-link__item">
        <NavLink to="/projects" className="nav-link__link">
          My Projects
        </NavLink>
      </li>
      <li className="nav-link__item">
        <NavLink to="/contacts" className="nav-link__link">
          Contact
        </NavLink>
      </li>
    </ul>
  </nav>
  
  )
}

export default Navbar