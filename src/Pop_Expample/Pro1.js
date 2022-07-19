import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState, props) => ({
      count: prevState.count + props.increment,
    }));
  };
  render() {
    setTimeout(this.incrementCount, 1500);
    return <div className="circle">{this.state.count}</div>;
  }
}
export default Counter;
