import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Link,
} from "react-router-dom";

export default class NavBT4 extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark justify-content-center text-capitalize sticky-top">
          <a className="navbar-brand" href="">
            <img src="/logo192.png" width="40px" />
          </a>
          <ul className="navbar-nav">
              <Link to='/'>
                <li className="nav-item ">
                  <span className="nav-link">
                    Trang chủ
                  </span>
                </li>
            </Link>
            <Link to='/todolist'>
            <li className="nav-item">
              <span className="nav-link">
                ToDoList
              </span>
            </li>
            </Link>
            <Link to='/calculator'>
              <li className="nav-item">
                <span className="nav-link">
                  Calculator
                </span>
              </li>
            </Link>
            <li className="nav-item">
              <a className="nav-link" href="">
                Props
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Form
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://docs.google.com/document/d/1-PzYXNjVJy9Q1k9Wdl63KauY-YV_XPsg/edit">
                Sheel
              </a>
            </li>
          </ul>

          <form className="form-inline" action="/action_page.php">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button className="btn btn-warning" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </nav>
      </div>
    );
  }
}
