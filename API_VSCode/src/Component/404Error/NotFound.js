import React from "react";
import logo from "../../logo.svg";
import "./NotFound.scss";

function NotFound() {
  return (
    <div className="App mt-4">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Not Found 404 Error
        </p>
      </header>
    </div>
  );
}

export default NotFound;
