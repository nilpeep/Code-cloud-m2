import "./Navbar.css";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { NavLink as RRNavLink } from "react-router-dom";

function Navigation() {
  return (
    <Navbar
      data-bs-theme="transparent"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand as={RRNavLink} to="/">
          MovieCloud
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={RRNavLink} to="/movies">
              Movies
            </Nav.Link>

            <NavDropdown title="Log In" id="basic-nav-dropdown">
              <NavDropdown.Item as={RRNavLink} to="/login">
                Sign Up
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Dont't have account? Create account
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Get Premium Account
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
