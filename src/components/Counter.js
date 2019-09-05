import React from "react";
import { connect } from "react-redux";
import "./Counter.css";
import { increment_v2, decrement } from "../actions/counterActions";

class Counter extends React.Component {
  //state = { count: 0 };

  increment = () => {
    /*
    this.setState({
      count: this.state.count + 1
    });
    */
    //this.props.dispatch(increment_v2());
    this.props.increment_v2();
  };

  decrement = () => {
    /*
    this.setState({
      count: this.state.count - 1
    });
    */

    //this.props.dispatch({ type: "DECREMENT" });
    //this.props.dispatch(decrement());
    this.props.decrement();
  };

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  increment_v2,
  decrement
};

function mapStateToProps(state) {
  return {
    count: state.counter.count
  };
}

//export default Counter;

/*
export default connect(
  mapStateToProps
)(Counter);
*/

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
