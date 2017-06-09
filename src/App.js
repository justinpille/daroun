import React, { Component } from "react";
import Daroun from "./daroun";

class App extends Component {
  state = {
    shift: 0
  };

  increment = () => {
    this.setState({
      shift: this.state.shift + 1
    });
  };

  componentDidMount() {
    this.timer = setInterval(this.increment, 250);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <div>{this.state.shift}</div>
        <Daroun shift={this.state.shift}>
          In the beginning...
        </Daroun>
      </div>
    );
  }
}

export default App;
