import React from "react";
import logo from "../../../logo.svg";
import { Table } from "reactstrap";
import { Container } from "reactstrap";
import './cart.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';

class Cart extends React.Component {
   
  state = {
    data : JSON.parse(localStorage.getItem("cart_detail")),
    dellocal: [],
   }

   destroyLocal(id){
     var data = this.state.data.filter(item=>item.id !== id);
     this.setState({data:data});
     localStorage.setItem('cart_detail',JSON.stringify(data));
   }
   
  render(){
    var values = '';
    if(this.state.data != null){
      values = this.state.data.map((items, i) => {
        return (
          <tr className="text-center" key={i}>
            <td className="w_img"><img src={logo} className="App-logo w-100 h-50" alt="logo"/></td>
            <td>{items.name}</td>
            <td>{items.age}</td>
            <td>{items.classs}</td>
            <td>{items.address}</td>
            <td> <button className="btn btn-info" onClick={()=>this.destroyLocal(items.id)}><i className="fas fa-trash"></i></button></td>
          </tr>
        );
      });
    }

    return (
      <Container>
        <Table dark className="mt-4">
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>Tên</th>
              <th>Tuổi</th>
              <th>Lớp</th>
              <th>Địa chỉ</th>
              <th><i className="fas fa-cog"></i></th>
            </tr>
          </thead>
          <tbody>{values}</tbody>
        </Table>
      </Container>
    );
  }
}

export default Cart;
