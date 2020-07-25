import React, { Component } from "react";

export default class Page_Home extends Component {
  render() {
    return (
      <div className="container-fluid demo">
        <div className="content">
          <div id="large-header" className="large-header">
            <canvas id="demo-canvas" />
            <h1 className="main-title">
              <span className="thin">Demo</span> Nhóm (H)
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
