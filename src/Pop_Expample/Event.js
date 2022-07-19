import React from 'react';
class Counterr extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  incrementCount = (e) => {
    console.log(e.type + ' ' + this.state.counter);
    this.setState(function (prevState, props) {
      return {
        counter: prevState.counter + props.increment,
      };
    });
  };

  decrementCount = (e) => {
    console.log(e.type + ' ' + this.state.counter);
    this.setState(function (prevState, props) {
      return {
        counter: prevState.counter - props.decrement,
      };
    });
  };

  mouseEnter=()=>{
    console.log('Mouse enter occured'+ this.state.counter);
  };
  render()
  {
    return(
      <div>
        <div className="box">
          {this.state.counter}
          </div>
          <button className="botton"
                  onClick={this.incrementCount}
                  onMouseEnter={this.mouseEnter}>
                    +
          </button>
          <button className="botton"
                  onClick={this.decrementCount}
                  onMouseEnter={this.mouseEnter}>
                    -
          </button>
      </div>
    );
  }
}
export default Counterr


