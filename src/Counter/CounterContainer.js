import React from "react";
import { connect } from 'react-redux';
import CounterDisplay from "./CounterDisplay";
import { increment } from '../redux/actions';

class CounterContainer extends React.Component {
  async componentDidMount() {
    setInterval(() => {
      this.props.incrementCounter();
    }, 2000);
  }
  render() {
    const { counter } = this.props;
    return (
      <div>
        <CounterDisplay count={counter} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch(increment())
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);