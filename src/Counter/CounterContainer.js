import React from "react";
import { connect } from 'react-redux';
import CounterDisplay from "./CounterDisplay";
import { increment, fetchImage } from '../redux/actions/index';

class CounterContainer extends React.Component {
  componentDidMount() {
    setInterval(() => {
      this.props.incrementCounter();
    }, 2000);
    setInterval(() => {
      this.props.fetchDogImage();
    }, 10000);
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
  incrementCounter: () => dispatch(increment()),
  fetchDogImage: () => dispatch(fetchImage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);