import React from "react";
import logo from "../../../logo.svg";
import detail from "../../../Detail.jpeg";
import "./detail.scss";
import {
  Container,
} from "reactstrap";

class Detail extends React.Component {
  render() {
    const obj = JSON.parse(localStorage.getItem("detail_product"));
    if (obj != null) {
      return (
        <Container>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="border img-product">
                <img src={detail} alt="logo" width="350px" height="300px" />
              </div>
            </div>
            <div className="col-md-8">
              <label>Tên: <strong>{obj.name}</strong></label>
              <br />
              <label>Tuổi: <strong>{obj.age}</strong></label>
              <br />
              <label>Lớp: <strong>{obj.classs}</strong></label>
              <p>
                Địa Chỉ: <strong>{obj.address}</strong>,<strong>{obj.address.city}</strong>
              </p>
            </div>
          </div>
        </Container>
      );
    } else window.location.href = "/";
  }
}

export default Detail;
