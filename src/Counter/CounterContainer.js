import React from "react";
import { connect } from 'react-redux';
import { increment, fetchImage } from '../redux/actions/index';
import CounterDisplay from "./CounterDisplay";
import ImageDisplay from "./ImageDisplay";
import loadingImage from '../../assets/loading.gif';

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
    const { counter, image } = this.props;
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        {image.fetching ? <img src={loadingImage} /> : <ImageDisplay image={image} /> }
        <CounterDisplay count={counter} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter,
  image: state.image,
});

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch(increment()),
  fetchDogImage: () => dispatch(fetchImage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);