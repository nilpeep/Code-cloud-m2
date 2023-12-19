import { useLocation } from "react-router-dom"
import "./Footer.scss"

const Footer = () => {
  const {pathname,state}=useLocation()
console.log(state)
  return (
    <footer className={`${pathname ==="/"? "horizontal": pathname==="/contacts" ? "middle" : "vertical"}`}>
  <div className="social-icons">
    <a href="#">
      <i className="fab fa-twitter fa-2x" />
    </a>
    <a href="#">
      <i className="fab fa-facebook fa-2x" />
    </a>
    <a href="#">
      <i className="fab fa-instagram fa-2x" />
    </a>
    <a href="#">
      <i className="fab fa-github fa-2x" />
    </a>
  </div>
  <div className="copyright">© Copyright 2023</div>
</footer>

  )
}

export default Footer