import React, { Component } from 'react';

import KeyPad from "./Calculator/KeyPad";
import Output from "./Calculator/Output";
import Title from "./Calculator/Title";

class Page_Calculator extends Component {
  state = {
    result: ''
  }
  buttonPressed = buttonName => {
    if(buttonName === "="){
      this.calculate();
    } else if (buttonName === "C"){
      this.reset();
    }else if (buttonName=== "CE"){
      this.backspace();
    }else{
      this.setState({
        result: this.state.result + buttonName
      });
    }
  };
  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  }
  reset = () => {
    this.setState({
      result: ""
    });
  }

  calculate = () => {
    try {
      this.setState({
      result: (eval(this.state.result) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };
  render() {
    return (
      <div>
        <div className="Page_Calculator">
          <div className="calc-body">
            <Title />
            <Output result={this.state.result}/>
            <KeyPad buttonPressed={this.buttonPressed}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Page_Calculator;

