import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
} from "reactstrap";

const Toggle = () => (
  <Container>
    <div className="dropdown mt-4">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        Menu
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {/* <Link to="/" className="dropdown-item">
            <li>Home</li>
          </Link>*/}
          
          <Link to="/DemoNodeApi" className="dropdown-item">
            <li>DemoApi</li>
          </Link>
          <Link to="/addproduct" className="dropdown-item">
            <li>Add Product</li>
          </Link>
          <Link to="/Cart" className="dropdown-item">
            <li>Cart</li>
          </Link> 
      </div>
    </div>
  </Container>
);

export default Toggle;
