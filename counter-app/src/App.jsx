import React, { Component } from 'react';
import './App.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increaseCount = () => this.setState(prevState => ({ count: prevState.count + 1 }));
  decreaseCount = () => this.setState(prevState => ({ count: prevState.count - 1 }));
  resetCount = () => this.setState({ count: 0 });

  render() {
    return (
      <div className="App">
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increaseCount}>Increase</button>
        <button onClick={this.decreaseCount}>Decrease</button>
        <button onClick={this.resetCount}>Reset</button>
      </div>
    );
  }
}

export default Counter;