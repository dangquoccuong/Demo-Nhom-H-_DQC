import React, { Component } from "react";

import { Link } from "react-router-dom";
import {
  Col,
  Card,
  CardImg,
  CardSubtitle,
  CardTitle,
  CardText,
  Button
} from "reactstrap";
import man from "../../../../uploads/man.png";
import woman from "../../../../uploads/woman.png";
import "./itemStudent.scss";
var dataCart = [];
class ItemStudent extends Component {
  
  detail(items) {
    localStorage.setItem("detail_product", JSON.stringify(items));
    window.location.href = "detail";
  }
  
  addcart(items) {
    if(JSON.parse(localStorage.getItem("cart_detail"))){
      dataCart = JSON.parse(localStorage.getItem("cart_detail"));
    }
    dataCart.push(items);
    localStorage.setItem("cart_detail", JSON.stringify(dataCart));
  }
  render() {
    return (
      <Col id="card-all" md="4 mb-4">
        <Card className="p-2 card-product">
          <div className="overflow-hidden d-block position-relative">
            <div className="img-student position-absolute d-flex justify-content-center align-items-center">
              <Link to={'/updateStudent/' + this.props.item.id} className="dropdown-item border border-dark icon-updatestudent bg-white d-flex justify-content-center align-items-center">
                <i className="fas fa-pencil-alt"></i>
              </Link>
              </div>
            <CardImg
              className="scale-img"
              top
              src={this.props.item.sex === "Nam" ? man : woman}
              alt="Card image cap"
            />
          </div>
          <CardTitle className="mb-0">
            <h5 className="py-2">{this.props.item.name}</h5>
          </CardTitle>
          <CardSubtitle>
            <i className="icon-unlock fas fa-unlock p-2"></i>
          </CardSubtitle>
          <CardText className="text-card position-relative mb-0">
            <span className="mr-2">Age: {this.props.item.age}</span>
            <span className="mr-2">Class: {this.props.item.classs}</span>
            <span className="mr-2">Score: {this.props.item.score}</span>
          </CardText>
          <CardText className="text-card position-relative">
            Địa chỉ: {this.props.item.address}
          </CardText>
            <div className="d-flex justify-content-between">
                <Button className="btn-info" onClick={() => this.detail(this.props.item)}>
                  Chi Tiết
                </Button>
                <Button className="btn-info" onClick={() => this.addcart(this.props.item)}>
                  Add To Cart
                </Button>
                <Button className="btn-info" onClick={() => this.props.clickdelete(this.props.item.id)}>
                  Delete
                </Button>
            </div>
        </Card>
      </Col>
    );
  }
}

export default ItemStudent;
