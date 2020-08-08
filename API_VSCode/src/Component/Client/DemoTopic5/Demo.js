import React, { Component } from "react";
import UserApi from "../../../api/userApi";
import "./demo.scss";
import img from "../../../logo.svg";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
} from "reactstrap";
import ItemStudent from "../list_users/box_student/ItemStudent";

class Demo extends Component {
  state = {
    users: [], // list student
    search: "", // tim kiem student
    message: "", // thong bao
  };

  constructor(props) {
    super(props);
    this.deleteUser = this.deleteUser.bind(this);
  }

  async componentDidMount() {
    try {
      const response = await UserApi.getAll();
      this.setState({ users: response });
    } catch (error) {
      console.log(" Failed to fect list User: " + error);
    }
  }

  async deleteUser(id) {
    try {
      const response = await UserApi.delete(id);
      this.setState({ users: response.data, message: response.message });
    } catch (error) {
      console.log("Cannot delete Users: " + error);
    }
    console.log(this.state.message);
  }

  // getdataUpdate(data){
  //   localStorage.setItem("dataUpdate",JSON.stringify(data));
  //   // this.setState({dataUpdate: data});
  // }

  render() {
    var data = this.state.users;
    var listUsers = null;

    function handleChange(e) {
      this.setState({ search: e.target.value });
    }

    if (data) {
      const search = this.state.search;
      listUsers = data.map((items, index) => {
        if (search !== "" && items.name.toLowerCase().indexOf(search) === -1) {
          return null;
        }
        return (
          <ItemStudent key={index} item={items} clickdelete={this.deleteUser}/>
        );
      });
    }
    return (
      <Container>
        <div className="module15 mt-4 mb-4">
          {/* <div className="header-module d-flex align-items-baseline px-2 py-1">
            <div className="left-heacer w-75">
              <Form>
                <FormGroup className="d-flex align-items-baseline m-0">
                  <Label for="exampleSelect" className="mr-1 font-weight-light">
                    Course categories:{" "}
                  </Label>
                  <Input
                    type="select"
                    name="select"
                    id="exampleSelect"
                    className="font-weight-light categories-item"
                  >
                    <option value="2">Faculty of History</option>
                    <option value="3">Faculty of Finance</option>
                    <option value="4">Faculty of Chemistry</option>
                    <option value="5">Faculty of Medicine</option>
                    <option value="6">Faculty of Physics</option>
                    <option value="7">Faculty of Geography</option>
                    <option value="8">Faculty of Biology</option>
                    <option value="9">University</option>
                    <option value="10">Theme</option>
                  </Input>
                </FormGroup>
              </Form>
            </div>
            <div className="right-header w-25 text-right">
              <button
                id="large"
                className="btn-type-show border-0 bg-transparent"
              >
                <i id="iconlarge" className="fas fa-th-large"></i>
              </button>
              <button
                id="list"
                className="btn-type-show border-0 bg-transparent"
              >
                <i id="iconlist" className="fas fa-th-list"></i>
              </button>
            </div>
          </div> */}
          {/* <div className="body-module mt-4 d-md-block d-none">
            <div className="d-flex p-3">
              <img width="258px" src={img} alt="card-body" />
              <div className="ml-3">
                <h4>University</h4>
                <span className="title-protagonist">
                  Sed porttitor lectus nibh. Quisque velit nisi, pretium ut
                  lacinia in, elementum id enim. Donec sollicitudin molestie
                  malesuada. Donec rutrum congue leo eget malesuada.
                  Pellentesque in ipsum id orci porta dapibus. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Donec sollicitudin
                  molestie malesuada
                </span>
              </div>
            </div>
          </div> */}
          {/* <div className="body-module mt-4 d-md-none d-block">
            <div className="p-3">
              <Card className="border-0 card-product">
                <CardImg top src={img} alt="Card image cap" />
                <CardBody className="bg-content p-0">
                  <CardTitle className="mb-0">
                    <h5 className="py-2">University</h5>
                  </CardTitle>
                  <CardText>
                    Sed porttitor lectus nibh. Quisque velit nisi, pretium ut
                    lacinia in, elementum id enim. Donec sollicitudin molestie
                    malesuada. Donec rutrum congue leo eget malesuada.
                    Pellentesque in ipsum id orci porta dapibus. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Donec
                    sollicitudin molestie malesuada.
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </div> */}
          <InputGroup className="mb-4 mt-4">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>Search Here</InputGroupText>
            </InputGroupAddon>
            <Input name="firstName" onChange={handleChange.bind(this)} />
          </InputGroup>
          <div className="mt-4">
            <Row>
              {listUsers}
            </Row>
          </div>
        </div>
      </Container>
    );
  }
}

export default Demo;
