import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import UserApi from "../../../../api/userApi";

class UpdateUser extends Component {
    state = {
        message: null,
        id : ''
      };
      initialState = {};
    
      constructor(props) {
        super(props);
        this.state = {
          name: "",
          age: "",
          sex: 0,
          address: "" ,
          classs: "THH1",
          score :""
        };
        this.initialState = this.state;
      }

      async componentDidMount(){
          try {
            const response = await UserApi.findbyid(this.props.match.params.id);
            this.setState({
                id: response.id,
                name: response.name,
                age: response.age,
                sex: response.sex !== "Nu" ? 0 : 0,
                address: response.address ,
                classs: response.classs,
                score :response.score
            })
          } catch (error) {
            console.log(" Failed to fect list User: " + error);
          }
      }
    
      //kiem tra form có rỗng ko ?
       checkValidate = ()=>{
         if(this.state.name !== '' && this.state.age !==''  && this.state.address !=='' && this.state.score !==''){
           if(!isNaN(this.state.score) && !isNaN(this.state.age)){
             return true;
           }else {
              this.setState({message: 'Score or Age is NaN'})
              return false;
           }
         }
          this.setState({message: 'Form invalid!'})
         return false;
      }
        
      onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
        console.log(this.state.sex);
        
      };
      
      onSave = async (e) => {
        e.preventDefault(); // chặn load lại trang
        if(this.checkValidate() === true){
          try {
            var sex = (this.state.sex === 0) ? "Nam" : "Nu";
            var url = this.state.id +"?name="+ this.state.name + "&age="+this.state.age + "&sex=" +sex+ "&address=" + this.state.address + "&classs=" + this.state.classs +"&score="+ this.state.score;
            console.log(url);
            
            const response = await UserApi.update(url);
            if(response){
                this.setState({ message: "Update student successful!" });
            }
            console.log(response);
            
            // this.setState({ message: response.message });
            this.setState(()=>this.initialState);
          } catch (error) {
            console.log(" Failed to fect list User: " + error);
          }
        }
      };
      
    
      render() {
        const typeuser = ["THH1", "THH2", "THH3", "THH4"];
        const { name, age, sex, address, classs, score } = this.state;
        return (
          <Container>
            <Form onSubmit={this.onSave}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" id="name" name="name" placeholder="name" value={name} onChange={this.onChange}/>
              </FormGroup>
              <FormGroup>
                <Label for="age">Age</Label>
                <Input type="text" id="age" name="age" placeholder="age" value={age} onChange={this.onChange}/>
              </FormGroup>
              <FormGroup tag="fieldset"onChange={this.onChange} >
                Sex
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="sex" value="0" defaultChecked = {sex === 0} />{' '}
                    Nam
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="sex" value="1" defaultChecked = {sex === 1}/>{' '}
                    Nữ
                    </Label>
                </FormGroup>
              </FormGroup>
              
              <FormGroup>
                <Label for="address">address</Label>
                <Input type="text" id="address" name="address" placeholder="address" value={address} onChange={this.onChange}/>
              </FormGroup>
              
              <FormGroup>
                <Label for="classs">Lớp</Label>
                <Input type="select" name="classs" id="classs" value={classs} onChange={this.onChange}>
                  {typeuser.map((item) => {
                    return <option key={item}>{item}</option>;
                  })}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="score">score</Label>
                <Input type="text" id="score" name="score" placeholder="score" value={score} onChange={this.onChange}/>
              </FormGroup>
              <div className="text-right">
                <Button className="btn btn-success">Submit</Button>
              </div>
            </Form>
                <div>{this.state.message}</div>
          </Container>
        );
      }
}

export default UpdateUser;