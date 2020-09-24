import React from "react";
import {
  Navbar,
  FormControl,
  Form,
  Nav,
  NavDropdown,
  Badge,
} from "react-bootstrap";
import "./bar.css";
import { Link } from "react-router-dom";
import {useStateValue}  from '../Stateprovider/StateProvider'

function Bar() {
  const [{basket}] = useStateValue();
  return (
    <div>
      <Navbar
        className="navbar"
        fixed="top"
        bg="dark"
        variant="dark"
        expand="lg"
      >
        <Navbar.Brand href="#home">
          <Link to="/">
            <img className="img" src="/images/logo.png" alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="links">
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/user"
            >
              <div className="sign">
                <span className="name">Hello </span>
                <span className="name user">user</span>
              </div>
            </Link>
            <Link
              style={{
                textDecoration: "none",
              }}
              to="/login"
            >
              <span className="logs">Login</span>
            </Link>

            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
    
                <i class="fas fa-search searchbtn fab"></i>


              <Link
                style={{
                  textDecoration: "none",
                }}
                to="/checkout"
              >
                <div className="cart">
                  <i class="fas fa-shopping-cart fab"></i>
                  <Badge className="badge" variant="light">
                    {basket?.length}
                  </Badge>
                </div>
              </Link>
            </Form>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Bar;
