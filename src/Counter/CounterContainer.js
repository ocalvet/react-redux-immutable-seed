import React from "react";
import CounterDisplay from "./CounterDisplay";
class CounterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 })
    }, 1000);
  }
  render() {
    return (
      <div>
        <CounterDisplay count={this.state.count} />
      </div>
    );
  }
}
export default CounterContainer;