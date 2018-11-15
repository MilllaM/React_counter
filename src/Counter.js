import React, { Component } from 'react';
import './Counter.css'

class Counter extends Component {
  state = { counter: 0 };

//every click increases the counter by 1
  handleClick = (event) => {
    console.log("handleClick");
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      }
    });
  }

  getButtonClass(value) {
    if (!value) {
      return "";
    }
    if (value %2 ) {
      return "nbr-even";
    } else {
      return "nbr-odd";
    }
  }

  render() {
    return (
      <div className={"counter " + this.getButtonClass(this.state.counter) } onClick={ this.handleClick }>{ this.state.counter }</div>
    );
  }
}

export default Counter;
