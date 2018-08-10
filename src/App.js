import React from "react";
import CounterContainer from "./Counter/CounterContainer";
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <CounterContainer />
      </div>
    );
  }
}
export default App;